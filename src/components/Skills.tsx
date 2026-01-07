"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Cpu, 
  Sparkles,
  Server,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "Go", "Java"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "GenAI & ML",
    icon: Sparkles,
    skills: ["LangChain", "OpenAI API", "Hugging Face", "RAG", "Vector DBs", "Prompt Engineering"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "FastAPI", "NestJS", "Express", "REST", "GraphQL"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Qdrant", "ChromaDB"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Linux"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frameworks",
    icon: Cpu,
    skills: ["LangGraph", "LlamaIndex", "Next.js", "React", "TailwindCSS"],
    color: "from-blue-500 to-blue-600",
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
