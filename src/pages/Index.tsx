import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
      </main>

      <footer className="border-t border-border/60 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}  Hari Haran. Designed & Developed by Hari Haran.
            </p>
            <div className="text-xs text-muted-foreground">
              <a href="#home" className="story-link">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
