
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const experiences = [
    {
      company: "Indilabs.ai",
      position: "Data Science Intern",
      duration: "October 2024 - Present (7 months)",
      achievements: [
        "Built a real-time Monitoring Dashboard that automates KPI tracking (delinquency rates, payment trends), enabling early risk detection and slashing manual reporting effort.",
        "Automated portfolio oversight to cut operational costs by triggering proactive interventions and optimizing collection-resource allocation.",
        "Developed a Prediction & Diagnostics module with end-to-end data pipeline (cleaning, EDA, encoding), feature selection via Information Value, decision-tree modeling, and evaluation using KS, ROC-AUC, and F1 metrics.",
        "Applied SHAP analysis to surface top payment drivers (e.g., "Months employed," "Application score") and segment loans into High/Medium/Low-risk cohorts.",
        "Developed segment-level vintage analytics by constructing stitching (cumulative) and marginal (periodic) performance curves, combining them with segment allocations to deliver highly accurate, month-ahead recovery forecasts.",
        "Designed "IndiBot," an AI-powered recovery analytics chatbot (Streamlit + Azure OpenAI) with Routing, Query-Generation, Compute, Supervisor, and Error-Handling agents for seamless SQL-backed metric retrieval.",
        "Created an internal text-to-SQL tool that halved ad-hoc query turnaround and accelerated report generation.",
        "Leading the development of an AI-driven settlement negotiation assistant that crafts empathetic, policy-compliant counter-offers with flexible multi-installment options.",
      ],
    },
    {
      company: "RE Journal",
      position: "Python Developer",
      duration: "May 2024 - August 2024 (4 months)",
      location: "Mumbai, Maharashtra, India",
      achievements: [
        "Developed data scraping tools to collect real estate market information",
        "Implemented clustering algorithms for property segmentation analysis",
        "Created automated reporting systems for market insights"
      ],
    },
    {
      company: "Quantum Software",
      position: "AI Intern",
      duration: "January 2024 - April 2024 (4 months)",
      achievements: [
        "Built ML pipelines for automated data processing and model training",
        "Developed prediction models for financial time-series data",
        "Optimized algorithm performance for real-time applications"
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Professional Experience
        </h2>
        
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto relative ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'
              } md:w-1/2 animate-slide-in`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: 0
              }}
            >
              {/* Timeline dot */}
              <div 
                className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-red border-4 border-white md:left-0 md:translate-x-[-8px]"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-8px',
                }}
              ></div>
              
              <Card className="p-5 md:p-6 card-hover">
                <h3 className="text-xl font-heading font-semibold mb-1">
                  {exp.position} @ <span className="text-red">{exp.company}</span>
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{exp.duration}</span>
                  {exp.location && (
                    <span className="ml-2">• {exp.location}</span>
                  )}
                </div>
                
                <ul className="space-y-2 text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red shrink-0 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
