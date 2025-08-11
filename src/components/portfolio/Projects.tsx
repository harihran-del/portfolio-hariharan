import Reveal from "./Reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    slug: "live-tracking-human-movement",
    title: "Live Tracking of Human Movement",
    description:
      "A Digital Image Processing project that detects and tracks human movement in real-time using computer vision techniques. Built for real-time monitoring applications.",
    tech: ["Python", "OpenCV", "DIP", "Real-time Processing"],
    img: "/projects/live-tracking.jpg",
    url: "", 
    repo: "https://github.com/harihran-del/Realtime-Human-movement-tracking",
  },
  {
    slug: "sleep-stage-classification",
    title: "Sleep Stage Classification",
    description:
      "Machine learning project to classify different sleep stages using biomedical signal data. Achieved high accuracy through feature engineering and model optimization.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML"],
    img: "/projects/sleep-stage.jpg",
    url: "",
    repo: "https://github.com/harihran-del/Sleep-Stages-Classification-by-EEG-Signals",
  },
  {
    slug: "plant-disease-prediction",
    title: "Plant Disease Prediction App",
    description:
      "An AI-powered app that predicts plant diseases from leaf images and suggests remedies. Integrated a CNN model with a user-friendly mobile interface.",
    tech: ["PyTorch", "FastAPI", "React Native", "Firebase"],
    img: "/projects/plant-disease.jpg",
    url: "",
    repo: "https://github.com/harihran-del/plant-disease-prediction",
  },
  {
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description:
      "A full-featured fitness tracker with step counting, workout logging, AI-based workout suggestions, and offline calorie estimation from images.",
    tech: ["React Native", "Expo", "Firebase", "AI/ML"],
    img: "/projects/fitness-tracker.jpg",
    url: "",
    repo: "https://github.com/harihran-del/fitness-tracker-app",
  },
  {
    slug: "gdp-360-hackathon",
    title: "GDP 360 - Hackathon Project",
    description:
      "Data analytics platform developed during a hackathon to visualize and compare GDP trends across countries, providing actionable insights through interactive dashboards.",
    tech: ["Power BI", "Alteryx", "Data Visualization", "Excel"],
    img: "/projects/gdp-360.jpg",
    url: "",
    repo: "",
  },
  {
    slug: "ecotrack",
    title: "EcoTrack – Carbon Footprint Tracker",
    description:
      "An AI-powered platform to track users' carbon footprint and provide eco-friendly suggestions based on location and behavior, built with React frontend and FastAPI backend.",
    tech: ["React", "FastAPI", "Firebase", "AI"],
    img: "/projects/ecotrack.jpg",
    url: "",
    repo: "https://github.com/harihran-del/ECOTRACK",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28" aria-label="Projects">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            A showcase of my recent work and passion projects
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-brand text-brand-foreground rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
