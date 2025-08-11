export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  img: string;
  tech: string[];
  url?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization and interactive charts.",
    longDescription: "Built a full-stack analytics dashboard that processes large datasets and presents insights through interactive visualizations. Features include real-time updates, custom date ranges, exportable reports, and responsive design that works across all devices.",
    img: "/src/assets/project-1.jpg",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    url: "https://analytics-demo.example.com",
    repo: "https://github.com/yourusername/analytics-dashboard",
    featured: true
  },
  {
    slug: "mobile-app-ui",
    title: "Mobile App UI",
    description: "Modern mobile app interface with smooth animations and intuitive user experience.",
    longDescription: "Designed and developed a mobile-first application interface focusing on user experience and performance. Implemented complex animations, gesture controls, and accessibility features while maintaining 60fps performance across devices.",
    img: "/src/assets/project-2.jpg",
    tech: ["React Native", "TypeScript", "Expo", "Figma"],
    url: "https://app-demo.example.com",
    repo: "https://github.com/yourusername/mobile-app-ui",
    featured: true
  },
  {
    slug: "ecommerce-storefront",
    title: "E-commerce Storefront",
    description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
    longDescription: "Developed a complete e-commerce solution with product catalog, shopping cart, payment processing, and admin panel. Integrated with Stripe for payments, implemented search functionality, and optimized for SEO and performance.",
    img: "/src/assets/project-3.jpg",
    tech: ["Next.js", "Prisma", "Stripe", "Tailwind CSS", "PostgreSQL"],
    url: "https://store-demo.example.com",
    repo: "https://github.com/yourusername/ecommerce-store",
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);