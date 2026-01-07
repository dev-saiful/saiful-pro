"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered URL Shortener",
    description: "Production-ready URL shortener with JWT authentication, role-based access control, and comprehensive testing. Built with NestJS, PostgreSQL, and industry-standard architecture.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/saifulislam",
    demo: null,
    gradient: "from-blue-500 to-purple-600",
    image: "/project-1.png",
  },
  {
    title: "RAG-Based Document Q&A System",
    description: "Intelligent document question-answering system using Retrieval-Augmented Generation. Implements vector embeddings, semantic search, and context-aware responses.",
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    github: "https://github.com/saifulislam",
    demo: null,
    gradient: "from-purple-500 to-pink-600",
    image: "/project-2.png",
  },
  {
    title: "LLM Orchestration Platform",
    description: "Scalable platform for orchestrating multiple LLM workflows with custom agents, memory management, and real-time streaming responses.",
    technologies: ["Python", "LangGraph", "Redis", "WebSockets", "Docker"],
    github: "https://github.com/saifulislam",
    demo: null,
    gradient: "from-green-500 to-teal-600",
    image: "/project-3.png",
  },
  {
    title: "Microservices API Gateway",
    description: "High-performance API gateway with rate limiting, authentication, load balancing, and service discovery for microservices architecture.",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "Kubernetes"],
    github: "https://github.com/saifulislam",
    demo: null,
    gradient: "from-orange-500 to-red-600",
    image: "/project-4.png",
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-20 bg-background"
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Gradient Accent Bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:gradient-text transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
