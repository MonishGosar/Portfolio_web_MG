import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      parallaxRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background parallax elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 -z-10"
      >
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gray-400 h-px w-full rotate-45"
              style={{ top: `${i * 10}%`, left: `-50%`, width: '200%' }}
            ></div>
          ))}
        </div>
        
        {/* Floating data particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#ea384c' : '#8E9196',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 10 + 15}s linear infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
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
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-600">
              <Button 
                onClick={scrollToContact} 
                className="bg-red hover:bg-red-dark text-white flex items-center gap-2 transition-all transform hover:scale-105 group relative overflow-hidden"
              >
                <span className="z-10 relative">Get in Touch</span>
                <span className="absolute inset-0 bg-red-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute w-8 h-8 bg-white/20 rounded-full animate-pulse"></span>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 hover:border-gray-400 flex items-center gap-2 group overflow-hidden"
                onClick={() => window.open("/Monish Gosar Resume (5).pdf", "_blank")}
              >
                <span>Download Resume</span>
                <Download size={16} className="transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-75 md:h-75">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-red/30 animate-spin-slow"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-2 rounded-full border-2 border-gray-300/40 animate-spin-slow-reverse"></div>
            
            {/* Inner solid background */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg"></div>
            
            {/* Avatar image */}
            <Avatar className="absolute inset-8 w-auto h-auto border-4 border-white shadow-lg group hover:scale-105 transition-transform duration-300">
              <AvatarImage 
                src="/Profile Photo Monish.jpg" 
                alt="Monish Gosar" 
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                MG
              </AvatarFallback>
            </Avatar>
            {/* Add a subtle glow effect */}
            <div className="absolute inset-8 rounded-full bg-red/10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
