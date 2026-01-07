"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles, Cpu, Brain, Code2 } from "lucide-react";
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep Dark Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0e1a 0%, #0d1224 40%, #121a2e 70%, #0a0e1a 100%)",
        }}
      />

      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.4 + (i % 4) * 0.15,
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              background: '#3b82f6',
              boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6',
            }}
          />
        ))}
      </div>

      {/* Glowing orbs in background */}
      <div 
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Image Section - Left Side */}
          <div className={`relative animate-fadeInUp ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Neon Border Container */}
            <div className="neon-border animate-pulseGlow">
              <div className="neon-border-inner p-1">
                <Image
                  src="/anime-profile.png"
                  alt="Saiful Islam - GenAI Software Developer"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>

            {/* Orbiting Tech Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '10s' }}
              >
                <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
                  <Brain className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '12s', animationDelay: '-4s' }}
              >
                <div className="p-2 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30">
                  <Cpu className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <div 
                className="absolute top-1/2 left-1/2 animate-orbit"
                style={{ animationDuration: '14s', animationDelay: '-8s' }}
              >
                <div className="p-2 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section - Right Side */}
          <div className="text-center lg:text-left space-y-6 max-w-xl">
            {/* Greeting with sparkle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 animate-fadeIn">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <p className="text-lg sm:text-xl text-white/90 font-medium">
                Hi, I&apos;m
              </p>
            </div>

            {/* Name with animated gradient - Blue/Teal */}
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold animate-fadeInUp"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #0ea5e9, #3b82f6)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'textGradientFlow 6s ease infinite',
              }}
            >
              Saiful Islam
            </h1>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 animate-fadeInUp animation-delay-200">
              <span className="text-blue-400">GenAI</span> Software Developer
            </h2>

            {/* Subtitle with glass card */}
            <div className="glass-card px-6 py-4 inline-block animate-fadeInUp animation-delay-400">
              <p className="text-lg sm:text-xl text-white/80">
                Specializing in <span className="text-blue-400 font-medium">Backend Systems</span> & <span className="text-teal-400 font-medium">Generative AI Solutions</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fadeInUp animation-delay-600">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 font-semibold px-8 py-6 text-lg transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-semibold px-8 py-6 text-lg gap-2 transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download="Saiful_Islam_Resume.pdf">
                  <FileDown className="h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 animate-fadeInUp animation-delay-800">
              <a
                href="https://github.com/saifulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/saifulislam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:saiful@example.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <div className="p-2 rounded-full border border-white/20 group-hover:border-blue-500/50 transition-colors duration-300">
          <ArrowDown className="h-6 w-6 text-white/80 group-hover:text-blue-400 transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
}
