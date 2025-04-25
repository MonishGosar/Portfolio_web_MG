import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Risk Analytics & Financial Forecasting", category: "core" },
    { name: "Machine Learning & Predictive Modeling", category: "core" },
    { name: "Prompt Engineering & LLM Integration", category: "core" },
    { name: "API Design & Microservices", category: "technical" },
    { name: "Data Science", category: "technical" },
    { name: "Cloud Platforms (AWS | Azure)", category: "technical" },
    { name: "MLOps & CI/CD for Models", category: "technical" },
    { name: "Database Management (PostgreSQL, MySQL, MongoDB)", category: "technical" },
    { name: "Data Visualization & Storytelling", category: "technical" },
    { name: "Critical Thinking & Problem Solving", category: "soft" },
    { name: "Cross-functional Collaboration", category: "soft" },
  ];

  const renderSkills = (category: string) => (
    <div className="flex flex-wrap gap-3">
      {skills
        .filter((skill) => skill.category === category)
        .map((skill) => (
          <Badge 
            key={skill.name}
            variant="outline"
            className={`
              rounded-full px-4 py-2 text-sm font-medium
              ${category === 'core' 
                ? 'bg-red/10 text-red border-red/20 hover:bg-red/20' 
                : category === 'technical'
                ? 'bg-blue/10 text-blue border-blue/20 hover:bg-blue/20'
                : 'bg-green/10 text-green border-green/20 hover:bg-green/20'}
              transition-all duration-200
            `}
          >
            {skill.name}
          </Badge>
        ))}
    </div>
  );

  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto space-y-8 ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
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
                Core Competencies
              </h3>
              {renderSkills("core")}
              
              <h3 className="text-xl font-heading font-semibold mt-8 mb-6 flex items-center gap-2">
                <span className="text-blue">
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                Technical Skills
              </h3>
              {renderSkills("technical")}
              
              <h3 className="text-xl font-heading font-semibold mt-8 mb-6 flex items-center gap-2">
                <span className="text-green">
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Soft Skills
              </h3>
              {renderSkills("soft")}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
