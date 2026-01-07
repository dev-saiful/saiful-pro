"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saiful.islam@example.com",
    href: "mailto:saiful.islam@example.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/saifulislam",
    href: "https://linkedin.com/in/saifulislam",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saifulislam",
    href: "https://github.com/saifulislam",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for Remote Work",
    href: null,
    color: "from-blue-500 to-blue-600",
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <Card
                  key={contact.label}
                  className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                    isVisible ? "animate-fadeInUp" : "opacity-0"
                  } ${contact.href ? "cursor-pointer" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} text-white flex-shrink-0`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="text-base font-semibold truncate group-hover:gradient-text transition-all">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label}>{content}</div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg gap-2"
              asChild
            >
              <a href="mailto:saiful.islam@example.com">
                <Send className="h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Saiful Islam. Built with Next.js, TailwindCSS & shadcn/ui
          </p>
        </div>
      </footer>
    </section>
  );
}
