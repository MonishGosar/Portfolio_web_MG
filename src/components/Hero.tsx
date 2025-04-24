
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div 
        className="absolute inset-0 bg-[#f5f5f5] -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(234, 56, 76, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(234, 56, 76, 0.03) 0%, transparent 50%)'
        }}
      />
      
      <div className="container-custom">
        <span className="inline-block text-red font-medium mb-4 opacity-0 animate-fade-in">
          Hello, I'm
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 max-w-3xl opacity-0 animate-fade-in animation-delay-200">
          Monish Gosar
          <span className="text-red">.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4 opacity-0 animate-fade-in animation-delay-400">
          Data Scientist @ Indilabs.ai
        </h2>
        
        <p className="text-base md:text-lg text-gray-700 max-w-xl mb-8 opacity-0 animate-fade-in animation-delay-600">
          Automating Financial Operations Through Intelligent Systems
        </p>
        
        <div className="opacity-0 animate-fade-in animation-delay-600">
          <Button 
            onClick={scrollToAbout} 
            className="bg-red hover:bg-red-dark text-white flex items-center gap-2 transition-colors"
          >
            Explore my work
            <ArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
