"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles, Code2, Brain, Cpu } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const infoCards = [
    { icon: Code2, label: "Role", value: "GenAI Developer" },
    { icon: Brain, label: "Focus", value: "LLMs & RAG Systems" },
    { icon: Cpu, label: "Backend", value: "Scalable APIs" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-20"
    >
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient Glow Effects */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left: Anime Profile Image */}
          <div className={`relative animate-fadeInUp`}>
            <div className="neon-border animate-pulse-glow">
              <div className="neon-border-inner p-1">
                <Image
                  src="/anime-profile.png"
                  alt="Saiful Islam - GenAI Developer"
                  width={300}
                  height={300}
                  className="rounded-[21px] object-cover"
                  priority
                />
              </div>
            </div>

            {/* Orbiting Icons - Desktop Only */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '15s' }}
              >
                <div className="p-2 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
                  <Brain className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '18s', animationDelay: '-6s' }}
              >
                <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
                  <Cpu className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '20s', animationDelay: '-12s' }}
              >
                <div className="p-2 rounded-full bg-violet-500/20 backdrop-blur-sm border border-violet-500/30">
                  <Code2 className="w-4 h-4 text-violet-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="hero-card p-8 md:p-10 max-w-lg animate-fadeInUp animation-delay-200">
            {/* Greeting */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white/70 text-sm font-medium tracking-wide uppercase">
                Welcome
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 gradient-text">
              Saiful Islam
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-6">
              <span className="text-cyan-400">GenAI</span> Software Developer
            </h2>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={card.label} 
                    className="info-card text-center animate-fadeInUp"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <p className="text-[11px] text-white/50 uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-sm font-medium text-white/90">{card.value}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-sm"
              >
                View Projects
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline text-sm"
              >
                Get In Touch
              </button>
              <a 
                href="/resume.pdf" 
                download="Saiful_Islam_Resume.pdf"
                className="btn-ghost text-sm inline-flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40 uppercase tracking-wider">Connect</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/dev-saiful"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card glass-card-hover text-white/60 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/dev-saiful"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card glass-card-hover text-white/60 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:devwork.saiful@gmail.com"
                  className="p-2.5 rounded-lg glass-card glass-card-hover text-white/60 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 transition-all duration-300">
          <ArrowDown className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
        </div>
      </button>
    </section>
  );
}
