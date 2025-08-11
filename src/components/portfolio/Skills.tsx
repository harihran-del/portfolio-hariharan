import Reveal from "./Reveal";
import { Database, BarChart3, Cpu, Code, Server, Terminal, Globe, Network } from "lucide-react";

const skills = [
  { icon: Cpu, label: "Python & Machine Learning" }, // PyTorch, TensorFlow, Scikit-learn
  { icon: BarChart3, label: "Data Analytics & Visualization" }, // Power BI, Matplotlib, Pandas, NumPy
  { icon: Code, label: "JavaScript & TypeScript" },
  { icon: Globe, label: "React.js / Next.js & Vite" },
  { icon: Server, label: "Node.js & Express.js" },
  { icon: Database, label: "SQL & Database Management" }, // MySQL, PostgreSQL
  { icon: Network, label: "REST API Development" }, // FastAPI, Flask
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28" aria-label="Skills">
      <div className="container">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills & Technologies</h2>
          <p className="mt-2 text-muted-foreground">Core technologies and tools I work with</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 40}>
              <div className="group glass rounded-lg p-4 text-center hover-scale">
                <Icon className="mx-auto h-7 w-7 text-brand" />
                <p className="mt-2 text-sm text-foreground/80">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
