import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300", 
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div 
          className="font-heading font-bold text-lg cursor-pointer" 
          onClick={() => scrollToSection("hero")}
        >
          Monish<span className="text-primary">.</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {["Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button 
                  className="text-sm font-medium hover:text-primary transition-colors link-hover"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
            <li>
              <Button
                onClick={() => scrollToSection("chat")}
                variant="default"
                className="gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Talk with me
              </Button>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - simplified for now */}
          <button className="p-2" aria-label="Menu">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
