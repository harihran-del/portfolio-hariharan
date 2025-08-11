import Reveal from "./Reveal";
import profileImg from "@/assets/hariharan-avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28" aria-label="About Me">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <img
            src={profileImg}
            alt="Profile photo of Hari Haran, AI & ML student"
            loading="lazy"
            className="mx-auto h-40 w-40 rounded-full border border-border object-cover shadow-sm"
          />
        </Reveal>
        <Reveal delay={100}>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I am a passionate AI and Machine Learning student who loves building innovative projects
              and exploring real-world applications of technology. I also have a strong interest in
              data analytics, working with tools like Power BI and other data visualization platforms
              to uncover insights and drive decision-making. My goal is to combine my technical skills
              with analytical thinking to create impactful solutions.
            </p>
            <p className="mt-4 text-sm text-brand font-medium">
              Currently: Final-year AI & ML student, focusing on real-world projects and working with data analytics tools.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
