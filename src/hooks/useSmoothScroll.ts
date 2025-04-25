import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      requestAnimationFrame(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 64; // 64px for header height

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    }
  }, []);

  return { scrollToElement };
}; 