import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical';
  showResume?: boolean;
}

const SocialLinks = ({ variant = 'horizontal', showResume = true }: SocialLinksProps) => {
  const links = [
    {
      href: "https://github.com/harihran-del",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      external: true
    },
    {
      href: "https://www.linkedin.com/in/hari-haran-84b6b3354/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      external: true
    },
    {
      href: "mailto:hariharanayyanar@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      external: false
    },
    {
      href: "tel:+918248569274",
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      external: false
    }
  ];

  const containerClass = variant === 'horizontal' 
    ? "flex items-center gap-4" 
    : "flex flex-col gap-3";

  return (
    <div className={containerClass}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-muted-foreground hover:text-brand transition-colors"
          aria-label={link.label}
          {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {link.icon}
        </a>
      ))}
      
      {showResume && (
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          download
          className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
        >
          <Download className="w-4 h-4" />
          Resume
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
