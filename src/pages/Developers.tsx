import { motion } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";

interface Developer {
  name: string;
  role: string;
  photo: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

const developers: Developer[] = [
  {
    name: "Cosmicsarja",
    role: "Full Stack Developer",
    photo: cosmicsarjaPhoto,
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
];

const Developers = () => {
  return (
    <section className="relative py-24 pt-28 min-h-screen flex items-center justify-center">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">
            Meet the Developer
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            The mind behind the VENCER 2K26 website.
          </p>
        </motion.div>

        {developers.map((dev, i) => (
          <motion.div
            key={dev.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.2)] mb-6">
              <img
                src={dev.photo}
                alt={dev.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {dev.name}
            </h3>
            <p className="text-sm font-display tracking-widest text-primary mb-6">
              {dev.role}
            </p>

            <div className="flex gap-4">
              {dev.instagram && (
                <a
                  href={dev.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Instagram size={20} />
                </a>
              )}
              {dev.github && (
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Github size={20} />
                </a>
              )}
              {dev.linkedin && (
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Developers;
