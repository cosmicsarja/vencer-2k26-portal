import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, User } from "lucide-react";

interface Developer {
  name: string;
  role: string;
  photo?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

const developers: Developer[] = [
  {
    name: "Cosmicsarja",
    role: "Full Stack Developer",
    photo: "https://github.com/cosmicsarja.png",
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
];

const Developers = () => {
  return (
    <section className="relative py-24 pt-28 min-h-screen">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Meet the Developers</h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            The talented team behind the VENCER 2K26 website.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {developers.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-6 text-center transition-all duration-500 group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted/40 border-2 border-border/50 flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors">
                {dev.photo ? (
                  <img src={dev.photo} alt={dev.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={36} className="text-muted-foreground/50" />
                )}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{dev.name}</h3>
              <p className="text-xs font-display tracking-wider text-primary mb-4">{dev.role}</p>
              <div className="flex justify-center gap-3">
                {dev.instagram && (
                  <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Instagram size={16} />
                  </a>
                )}
                {dev.github && (
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Github size={16} />
                  </a>
                )}
                {dev.linkedin && (
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
