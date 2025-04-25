"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    title: "Contractify: RAG-Powered QA Bot",
    description:
      "A RAG-backed legal contract summarizer chatbot using FAISS and Nomic embeddings, integrating Llama3 and Google's Gemini Model for precise summaries.",
    tags: ["RAG", "FAISS", "Nomic Embeddings", "Llama3", "Gemini-2-Flash", "LangChain"],
    details: [
      "Built a RAG-backed legal contract summarizer chatbot using FAISS and Nomic embeddings, integrating Llama3 and Google's Gemini Model for precise summaries.",
      "Developed a LangChain-based Q&A system with custom prompt templates and Streamlit UI, enabling interactive legal document querying.",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/MonishGosar/Contractify-AI-Powered-Contract-Analysis-System-",
  },
  {
    title: "Audio Classification - Industrial Steel",
    description:
      "A 1D and 2D CNN for steel pipe sound classification, achieving a 98% F1 score using FFT-generated spectrograms.",
    tags: ["CNN", "FFT", "Audio Classification", "Azure Services"],
    details: [
      "Implemented a 1D and 2D CNN for steel pipe sound classification, achieving a 98% F1 score using FFT-generated spectrograms to classify steel pipe sounds.",
      "Applied data augmentation (time shifting, pitch scaling) to improve model robustness.",
      "Engineered automated ML pipeline on Azure using Data Factory and Blob Storage, streamlining the training workflow for audio classification models.",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/MonishGosar/Audio-Classification",
  },
  {
    title: "Money Mule Detection",
    description:
      "A stacked ensemble ML model for fraud detection on transaction datasets, focusing on handling class imbalance using SMOTE.",
    tags: ["Random Forest", "XGBoost", "CatBoost", "SMOTE", "SHAP", "LIME"],
    details: [
      "Developed stacked ensemble ML model (Random Forest, XGBoost, CatBoost) for fraud detection on transaction dataset, focusing on handling class imbalance using SMOTE.",
      "Analyzed 100,000+ transactions, achieving 0.987 F1 Score, 99% Accuracy, and a Brier score of 0.0013.",
      "Applied SHAP and LIME techniques to generate feature importance visualizations and explain individual model predictions.",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-all duration-500`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Projects</h2>
            <p className="mx-auto max-w-[700px] text-black md:text-xl">
              Showcasing my technical skills and problem-solving abilities
            </p>
          </div>
        </div>
        <div
          className={`mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 ${
            isInView ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 delay-${index * 200} ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-black">{project.title}</CardTitle>
                  <CardDescription className="text-black">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2 mb-4 text-sm text-black">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-black">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="text-black">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-red hover:bg-red-dark text-white">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
