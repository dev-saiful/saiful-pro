"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Sonargaon University, Bangladesh",
    year: "2018 - 2022",
    description: "Graduated with CGPA 3.87/4.00. Focused on Software Engineering, Artificial Intelligence, and Database Systems.",
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
      className="py-24 section-dark"
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
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-white/50 uppercase tracking-wider">Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          {/* Education Cards */}
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`card-dark p-6 md:p-8 group ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 w-fit">
                      <GraduationCap className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-medium text-white/70">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
