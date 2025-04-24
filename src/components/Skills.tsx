
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Risk Analytics", category: "top" },
    { name: "Financial Forecasting", category: "top" },
    { name: "Artificial Intelligence", category: "top" },
    { name: "Python", category: "technical" },
    { name: "Machine Learning", category: "technical" },
    { name: "Data Visualization", category: "technical" },
    { name: "SQL", category: "technical" },
    { name: "Statistical Analysis", category: "technical" },
    { name: "Predictive Modeling", category: "technical" },
  ];

  const certifications = [
    "Python for Data Science",
    "AI Virtual Experience Program",
    "Machine Learning with Python",
    "Investment Banking Fundamentals",
  ];

  const renderSkills = (category: string) => (
    <div className="flex flex-wrap gap-2">
      {skills
        .filter((skill) => skill.category === category)
        .map((skill) => (
          <Badge 
            key={skill.name}
            className={`
              text-sm py-1 px-3 
              ${category === 'top' 
                ? 'bg-red text-white hover:bg-red-dark' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
            `}
          >
            {skill.name}
          </Badge>
        ))}
    </div>
  );

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Skills & Certifications
        </h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
        >
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
                <span className="text-red">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </span>
                Top Skills
              </h3>
              
              {renderSkills("top")}
              
              <h4 className="text-lg font-medium mt-6 mb-3">Technical Skills</h4>
              {renderSkills("technical")}
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
                <span className="text-red">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </span>
                Certifications
              </h3>
              
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-red"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Currently pursuing B.Tech in Data Science
                  <br />
                  NMIMS Mumbai (2021-2025)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
