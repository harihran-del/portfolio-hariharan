import { useMemo, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Reveal from "./Reveal";
import "./Hero.css"; // <-- make sure to import the CSS file where .download-resume-btn is defined

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  const overlayStyle = useMemo(() => {
    return {
      background: `radial-gradient(600px at ${pos.x}% ${pos.y}%, hsl(var(--brand) / 0.25), transparent 60%)`,
    } as CSSProperties;
  }, [pos]);

  function handleMove(e: MouseEvent) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    window.requestAnimationFrame(() => setPos({ x, y }));
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-hero"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={overlayStyle} />
      <div className="container relative py-24 md:py-36">
        <Reveal>
          <p className="mb-4 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur-md">
            Learning, Building, and Innovating in AI 
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-6xl bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">
            Hi, I'm <span className="text-brand">Hariharan</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground bg-black/60 text-white p-4 rounded-lg">
            I’m Hariharan, a final-year AI & ML student passionate about turning innovative ideas into real-world solutions. From AI-powered applications to insightful data analytics dashboards, I love building tools that make an impact.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-brand text-brand-foreground hover:opacity-90"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              download
              className="download-resume-btn" // ✅ new class applied
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 border border-border hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
