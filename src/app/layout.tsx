import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saiful Islam | GenAI Software Developer",
  description: "Portfolio of Saiful Islam - GenAI Software Developer specializing in backend systems, Large Language Models, and AI-powered solutions.",
  keywords: ["GenAI", "Software Developer", "Backend", "AI", "Machine Learning", "LLM", "Portfolio"],
  authors: [{ name: "Saiful Islam" }],
  openGraph: {
    title: "Saiful Islam | GenAI Software Developer",
    description: "GenAI Software Developer specializing in backend systems and AI solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
