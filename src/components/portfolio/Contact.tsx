import { useState } from "react";
import Reveal from "./Reveal";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (message.length < 10) {
      toast({
        title: "Message too short",
        description: "Message should be at least 10 characters.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28" aria-label="Contact">
      <div className="container max-w-4xl">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">Let's Work Together</h2>
          <p className="mt-2 text-muted-foreground text-center max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <Reveal delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-brand" />
                    <a href="mailto:hariharanayyanar@gmail.com" className="story-link">
                      hariharanayyanar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-brand" />
                    <a href="tel:+918248569274" className="story-link">
                      +91 82485 69274
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-brand" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Follow Me</h4>
                <SocialLinks variant="vertical" showResume={false} />
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Reveal delay={200}>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand resize-none transition-all"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-brand text-brand-foreground font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
