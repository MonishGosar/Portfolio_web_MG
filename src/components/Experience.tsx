
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, ArrowRight, Download } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CountUpMetric } from "@/components/CountUpMetric";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});
  
  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const experiences = [
    {
      company: "Indilabs.ai",
      position: "Data Science Intern",
      duration: "October 2024 - Present (7 months)",
      metric: { value: 40, prefix: "–", suffix: "%" },
      metricLabel: "reporting time",
      achievements: [
        "Built a real-time Monitoring Dashboard that automates KPI tracking (delinquency rates, payment trends), enabling early risk detection and slashing manual reporting effort.",
        "Automated portfolio oversight to cut operational costs by triggering proactive interventions and optimizing collection-resource allocation.",
        "Developed a Prediction & Diagnostics module with end-to-end data pipeline (cleaning, EDA, encoding), feature selection via Information Value, decision-tree modeling, and evaluation using KS, ROC-AUC, and F1 metrics.",
        "Applied SHAP analysis to surface top payment drivers (e.g., \"Months employed,\" \"Application score\") and segment loans into High/Medium/Low-risk cohorts.",
        "Developed segment-level vintage analytics by constructing stitching (cumulative) and marginal (periodic) performance curves, combining them with segment allocations to deliver highly accurate, month-ahead recovery forecasts.",
        "Designed \"IndiBot,\" an AI-powered recovery analytics chatbot (Streamlit + Azure OpenAI) with Routing, Query-Generation, Compute, Supervisor, and Error-Handling agents for seamless SQL-backed metric retrieval.",
        "Created an internal text-to-SQL tool that halved ad-hoc query turnaround and accelerated report generation.",
        "Leading the development of an AI-driven settlement negotiation assistant that crafts empathetic, policy-compliant counter-offers with flexible multi-installment options.",
      ],
      chartType: "line"
    },
    {
      company: "RE Journal",
      position: "Python Developer",
      duration: "May 2024 - August 2024 (4 months)",
      location: "Mumbai, Maharashtra, India",
      metric: { value: 35, prefix: "+", suffix: "%" },
      metricLabel: "market insights",
      achievements: [
        "Developed data scraping tools to collect real estate market information",
        "Implemented clustering algorithms for property segmentation analysis",
        "Created automated reporting systems for market insights"
      ],
      chartType: "bar"
    },
    {
      company: "Quantum Software",
      position: "AI Intern",
      duration: "January 2024 - April 2024 (4 months)",
      metric: { value: 60, prefix: "+", suffix: "%" },
      metricLabel: "prediction accuracy",
      achievements: [
        "Built ML pipelines for automated data processing and model training",
        "Developed prediction models for financial time-series data",
        "Optimized algorithm performance for real-time applications"
      ],
      chartType: "area"
    },
  ];

  return (
    <section id="experience" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Professional Experience
        </h2>
        
        <div 
          ref={ref}
          className={`relative transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Red progress line */}
          <div className="absolute left-0 top-1/2 h-1 bg-gray-100 w-full transform -translate-y-1/2 z-0">
            <div 
              className={`h-full bg-red transition-all duration-1000 ease-in-out`}
              style={{ width: isInView ? '100%' : '0%' }}
            ></div>
          </div>
          
          <Carousel 
            opts={{ align: "start" }}
            className="w-full"
          >
            <CarouselContent className="py-8">
              {experiences.map((exp, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`relative perspective-1000 transition-all duration-500 animate-slide-in h-full`} 
                    style={{ animationDelay: `${index * 200}ms` }}
                    onClick={() => toggleFlip(index)}
                  >
                    <div 
                      className={`relative w-full transition-transform duration-700 transform-style-3d ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                    >
                      {/* Front Side */}
                      <Card className="p-5 md:p-6 card-hover backface-hidden h-full">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-heading font-semibold">
                            <span className="text-red">{exp.company}</span>
                          </h3>
                          <Briefcase size={20} className="text-red" />
                        </div>
                        
                        <div className="mb-3">
                          <p className="font-medium">{exp.position}</p>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.duration}</span>
                          </div>
                          {exp.location && (
                            <div className="text-sm text-gray-500 mt-1">{exp.location}</div>
                          )}
                        </div>
                        
                        <div className="my-6 flex flex-col items-center">
                          <div className="text-3xl font-bold flex items-center text-red">
                            <span>{exp.metric.prefix}</span>
                            <CountUpMetric value={exp.metric.value} duration={2} />
                            <span>{exp.metric.suffix}</span>
                          </div>
                          <div className="text-sm text-gray-600">{exp.metricLabel}</div>
                        </div>
                        
                        <ScrollArea className="h-48 pr-4">
                          <ul className="space-y-2 text-sm">
                            {exp.achievements.slice(0, 3).map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red shrink-0 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                        
                        <div className="mt-4 text-center text-sm text-gray-500">
                          Tap to see visualization
                        </div>
                      </Card>
                      
                      {/* Back Side */}
                      <Card className="p-5 md:p-6 absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-heading font-semibold mb-1 text-red">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-gray-600">Data Visualization</p>
                        </div>
                        
                        <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-lg">
                          <div className="text-3xl text-red">{exp.chartType} Chart</div>
                        </div>
                        
                        <div className="mt-4 text-center text-sm text-gray-500">
                          Tap to see details
                        </div>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious className="-left-12 bg-white/60 hover:bg-white" />
              <CarouselNext className="-right-12 bg-white/60 hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Experience;
