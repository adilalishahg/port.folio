import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-foreground/40 text-sm font-mono">
            &copy; {new Date().getFullYear()} ADIL ALI. BUILT WITH NEXT.JS & FRAMER MOTION.
          </p>
        </div>
      </footer>
    </main>
  );
}
