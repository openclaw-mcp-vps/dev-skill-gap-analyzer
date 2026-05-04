import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Skill Gap Analyzer – Find Your Missing Skills",
  description: "Analyze job postings to find your missing skills. Compare required skills against your GitHub/LinkedIn profile and get personalized learning roadmaps."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="45fc8ae3-3b78-4ce8-8bd7-780878d5ec69"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
