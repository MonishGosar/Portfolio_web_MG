
import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

interface CountUpMetricProps {
  value: number;
  duration?: number;
  decimals?: number;
}

export const CountUpMetric = ({ 
  value, 
  duration = 2, 
  decimals = 0 
}: CountUpMetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const countingRef = useRef<boolean>(false);
  
  useEffect(() => {
    if (!isInView || countingRef.current) return;
    
    countingRef.current = true;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);
  
  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
};
