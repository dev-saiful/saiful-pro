"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
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
      id="about"
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Content */}
          <Card className="max-w-4xl mx-auto border-2 hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Hello! I&apos;m <span className="font-semibold text-foreground gradient-text-ai">Saiful Islam</span>, 
                  a passionate <span className="font-semibold text-foreground">GenAI Software Developer</span> with 
                  a strong focus on building robust and scalable backend systems.
                </p>
                
                <p className="text-muted-foreground">
                  I specialize in leveraging cutting-edge <span className="font-semibold text-foreground">Generative AI</span> technologies 
                  to create innovative solutions that solve real-world problems. My expertise lies in designing and implementing 
                  high-performance backend architectures that power intelligent applications.
                </p>
                
                <p className="text-muted-foreground">
                  With a deep understanding of <span className="font-semibold text-foreground">Large Language Models (LLMs)</span>, 
                  <span className="font-semibold text-foreground"> RAG systems</span>, and 
                  <span className="font-semibold text-foreground"> AI orchestration frameworks</span>, I build systems that are not 
                  only powerful but also maintainable and production-ready.
                </p>
                
                <p className="text-muted-foreground">
                  When I&apos;m not coding, I enjoy exploring new AI research papers, contributing to open-source projects, 
                  and staying up-to-date with the latest advancements in the GenAI ecosystem.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
