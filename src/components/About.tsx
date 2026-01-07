"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Trophy, Briefcase, Code2, Users } from "lucide-react";

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

  const highlights = [
    { icon: Briefcase, label: "3+ Years", value: "Experience" },
    { icon: Trophy, label: "2x ICPC", value: "Participant" },
    { icon: Users, label: "Team Lead", value: "InteliTalk" },
    { icon: Code2, label: "Freelancer", value: "Worldwide" },
  ];

  return (
    <section
      id="about"
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
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-white/50 uppercase tracking-wider">My Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.label}
                  className={`card-dark p-4 text-center ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                  <p className="text-base font-bold text-white">{item.label}</p>
                  <p className="text-xs text-white/50">{item.value}</p>
                </div>
              );
            })}
          </div>

          {/* Story Content */}
          <div className="max-w-3xl mx-auto">
            <div className="card-glow p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-white/80">
                  Hi! I&apos;m <span className="text-cyan-400 font-medium">Saiful Islam</span>. My journey started 
                  with a simple question — how can computers be smart like humans? That curiosity turned into 
                  my career.
                </p>
                
                <p className="text-white/80">
                  I competed in <span className="text-white font-medium">ICPC twice</span> with my team. One of those 
                  times, we made it to the onsite round as <span className="text-cyan-400 font-medium">Team Zerone</span>. 
                  Those experiences taught me how to solve hard problems under pressure.
                </p>

                <p className="text-white/80">
                  In my final year of university, I led a <span className="text-white font-medium">5-member team</span> to 
                  build <span className="text-cyan-400 font-medium">InteliTalk</span> — a chatbot for our university. 
                  This was when LangChain was brand new and there were almost no tutorials. We learned everything 
                  from Google, YouTube, and reading documentation. I designed and built the entire backend myself. 
                  It was my first RAG system, and it worked!
                </p>
                
                <p className="text-white/80">
                  For the past <span className="text-white font-medium">3+ years</span>, I&apos;ve been building 
                  software that uses AI. I work mainly on backend systems — the code that makes apps run smoothly 
                  behind the scenes. I&apos;ve also worked with clients from different countries as a freelancer.
                </p>
                
                <p className="text-white/80">
                  Now, I focus on <span className="text-cyan-400 font-medium">Generative AI</span> — teaching 
                  computers to understand text, answer questions, and help people work faster. I love turning 
                  complex ideas into simple, useful tools.
                </p>
                
                <p className="text-white/60 italic border-l-2 border-cyan-500/50 pl-4">
                  &ldquo;I build smart systems that make life easier.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
