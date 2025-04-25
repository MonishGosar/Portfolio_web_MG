"use client"

import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

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
    <section id="projects" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Featured Projects
        </h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="overflow-hidden card-hover"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge 
                      key={i}
                      variant="outline" 
                      className="bg-gray-100 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center gap-2 hover:bg-red hover:text-white hover:border-red transition-colors"
                >
                  <Github size={14} />
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
