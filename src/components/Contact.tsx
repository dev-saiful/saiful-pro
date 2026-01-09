"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare } from "lucide-react";

// Custom Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "devwork.saiful@gmail.com",
    href: "mailto:devwork.saiful@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dev-saiful",
    href: "https://linkedin.com/in/dev-saiful",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dev-saiful",
    href: "https://github.com/dev-saiful",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for Remote Work",
    href: null,
  },
];

export default function Contact() {
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
      id="contact"
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
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span className="text-sm text-white/50 uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const CardContent = (
                <div
                  className={`card-dark p-5 group ${contact.href ? "cursor-pointer" : ""} ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-1">
                        {contact.label}
                      </p>
                      <p className="text-sm font-medium text-white/90 truncate group-hover:text-cyan-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {CardContent}
                </a>
              ) : (
                <div key={contact.label}>{CardContent}</div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:devwork.saiful@gmail.com"
              className="btn-primary text-base py-3 px-8 inline-flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Me an Email
            </a>
            <a
              href="https://t.me/dev_saiful"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base py-3 px-8 rounded-lg bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all duration-300"
            >
              <TelegramIcon className="w-5 h-5" />
              Message on Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Saiful Islam. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Built with Next.js, TailwindCSS & shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
