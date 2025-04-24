
import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Currently pursuing a B.Tech in Data Science (2021-2025) at NMIMS Mumbai, I specialize in leveraging advanced analytics and AI to 
              transform financial operations. My expertise lies at the intersection of risk analytics, financial forecasting, and 
              artificial intelligence.
            </p>
            
            <p>
              With experience at Indilabs.ai, I've focused on developing AI-driven debt collection and negotiation tools, 
              creating solutions that significantly improve operational efficiency while maintaining compliance requirements.
            </p>
            
            <p>
              I'm passionate about turning complex financial data into actionable insights and building intelligent systems that 
              streamline decision-making processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
