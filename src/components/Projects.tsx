"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Folder, ChevronRight, X, Key } from "lucide-react";

const projects = [
  {
    title: "InteliTalk - University Chatbot",
    description: "Led a 5-member team to build a RAG-based chatbot for university environment. Designed and developed the complete backend system when LangChain was first introduced with limited resources.",
    fullDescription: "InteliTalk was my final year project where I led a team of 5 members. We built a Retrieval-Augmented Generation (RAG) chatbot specifically designed for university students and staff. The system could answer questions about courses, schedules, faculty information, and campus facilities. I designed and developed the entire backend architecture, including the vector database integration, conversation memory, and API endpoints. This was built when LangChain was brand new with very limited documentation - we learned everything from scratch through documentation, YouTube tutorials, and experimentation.",
    technologies: ["Python", "LangChain", "FastAPI", "RAG", "Vector DB"],
    github: null,
    demo: "https://intelitalk.vercel.app/",
    credentials: "Email: demo@test.com | Password: demo123",
    image: "/project-1.png",
  },
  {
    title: "AI-Powered URL Shortener",
    description: "Production-ready URL shortener with JWT authentication, role-based access control, and comprehensive testing.",
    fullDescription: "A full-featured URL shortener service built with industry-standard practices. Features include JWT-based authentication with refresh tokens, role-based access control (User/Admin roles), URL analytics tracking, rate limiting, and comprehensive unit and E2E testing. The architecture follows clean code principles with proper separation of concerns, making it easily maintainable and scalable.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/dev-saiful",
    demo: "https://demo-link.net",
    credentials: "Email: demo@gmail.com | Password: 123456",
    image: "/project-2.png",
  },
  {
    title: "RAG Document Q&A System",
    description: "Intelligent document question-answering system using Retrieval-Augmented Generation with vector embeddings and semantic search.",
    fullDescription: "An intelligent system that allows users to upload documents and ask questions in natural language. The system uses vector embeddings to understand document content and retrieves relevant context to generate accurate answers. Built with a focus on accuracy and response quality, featuring chunk optimization, hybrid search, and source citation for transparency.",
    technologies: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI"],
    github: "https://github.com/dev-saiful",
    demo: null,
    credentials: null,
    image: "/project-3.png",
  },
  {
    title: "LLM Orchestration Platform",
    description: "Scalable platform for orchestrating multiple LLM workflows with custom agents and real-time streaming.",
    fullDescription: "A platform designed to manage complex LLM workflows involving multiple agents, tools, and memory systems. Features include agent orchestration with LangGraph, persistent conversation memory with Redis, real-time streaming responses via WebSockets, and a modular architecture that allows easy addition of new agents and tools. Built for production with proper error handling, logging, and monitoring.",
    technologies: ["Python", "LangGraph", "Redis", "WebSockets", "Docker"],
    github: "https://github.com/dev-saiful",
    demo: null,
    credentials: null,
    image: "/project-4.png",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 section-dark-alt"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Folder className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-white/50 uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card-dark overflow-hidden group ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Accent Line */}
                <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      Read More
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs py-2 px-4 inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs py-2 px-4 inline-flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal - Improved Layout */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-sm animate-fadeIn py-8 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed Position */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-2 -right-2 z-10 p-2.5 rounded-full bg-white/10 border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="card-glow overflow-hidden">
              {/* Header Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/50 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Accent Line */}
              <div className="h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">
                    About This Project
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="badge-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credentials */}
                {selectedProject.credentials && (
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Key className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-medium text-cyan-400">Demo Credentials</h4>
                    </div>
                    <p className="text-sm text-white/80 font-mono">{selectedProject.credentials}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-3 px-6 inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-3 px-6 inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-ghost text-sm py-3 px-6"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
