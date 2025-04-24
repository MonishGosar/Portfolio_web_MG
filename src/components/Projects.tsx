
import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Maximize2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const projects = [
    {
      title: "Contractify",
      description: "A legal-contract QA bot leveraging NLP to analyze and validate legal documents, providing automated compliance checking and risk assessment.",
      tags: ["NLP", "BERT", "Python", "Legal Tech"],
      link: "#",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Audio Classification CNN",
      description: "Deep learning pipeline for audio classification using convolutional neural networks, with feature extraction through mel-spectrograms and wavelet transforms.",
      tags: ["CNN", "Deep Learning", "PyTorch", "Audio Processing"],
      link: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Money-Mule Fraud Detector",
      description: "Machine learning system that identifies potential money laundering patterns by analyzing transaction networks and detecting unusual financial behaviors.",
      tags: ["Fraud Detection", "Graph Analysis", "XGBoost", "Financial Security"],
      link: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400"
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Featured Projects
        </h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 200}ms`,
                background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red/30 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              <CardHeader className="relative z-20">
                <CardTitle className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-red to-red-dark bg-[length:0%_2px] group-hover:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-all duration-500">
                    {project.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-20">
                <HoverCard>
                  <HoverCardTrigger>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-left hover:bg-transparent">
                      <p className="text-sm text-gray-600 line-clamp-2 hover:text-gray-900 transition-colors">
                        {project.description}
                      </p>
                      <Maximize2 size={16} className="inline-block ml-1 text-gray-400" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <p className="text-sm">{project.description}</p>
                  </HoverCardContent>
                </HoverCard>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i}
                      variant="outline" 
                      className="bg-white/80 backdrop-blur-sm text-xs font-medium transition-transform hover:scale-105"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="relative z-20">
                <div className="flex gap-2 w-full">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/80 backdrop-blur-sm hover:bg-red hover:text-white hover:border-red transition-all group"
                  >
                    <Github size={14} className="mr-2" />
                    Code
                    <span className="absolute inset-x-0 w-0 h-full bg-red transition-all duration-300 -z-10 group-hover:w-full" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-white/80 backdrop-blur-sm hover:bg-red hover:text-white hover:border-red transition-all group"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Demo
                    <span className="absolute inset-x-0 w-0 h-full bg-red transition-all duration-300 -z-10 group-hover:w-full" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
