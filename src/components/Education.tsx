"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 - 2022",
    description: "Focused on Software Engineering, Artificial Intelligence, and Database Systems. Graduated with honors.",
  },
  {
    degree: "Advanced AI & Machine Learning Certification",
    institution: "Online Learning Platform",
    year: "2023",
    description: "Specialized in Large Language Models, Deep Learning, and Generative AI applications.",
  },
];

export default function Education() {
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
      id="education"
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
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white w-fit">
                        <GraduationCap className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-muted-foreground">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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
