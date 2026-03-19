import { motion } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import codeBloomPhoto from "@/assets/code-bloom-avatar.png";
import digitalForestPhoto from "@/assets/digital-forest-avatar.png";
import energyStormPhoto from "@/assets/energy-storm-avatar.png";

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
    role: "Lead Developer",
    photo: cosmicsarjaPhoto,
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
  {
    name: "Sahil Barbal",
    role: "Frontend Specialist",
    photo: codeBloomPhoto,
    instagram: "https://instagram.com/sahilbarbal",
    github: "https://github.com/sahilbarbal",
    linkedin: "https://linkedin.com/in/sahilbarbal",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    photo: digitalForestPhoto,
    instagram: "https://instagram.com/priyasharma.design",
    github: "https://github.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Rohan Patel",
    role: "Backend Developer",
    photo: energyStormPhoto,
    instagram: "https://instagram.com/rohanpatel.dev",
    github: "https://github.com/rohanpatel",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
];

const Developers = () => {
  return (
    <section className="relative py-24 pt-28 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider fest-gradient-text mb-6">
            Meet the Developers
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The talented minds behind VENCER 2K26 portal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
          {developers.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group flex flex-col items-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 max-w-sm mx-auto"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 overflow-hidden rounded-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img
                  src={dev.photo}
                  alt={dev.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                {dev.name}
              </h3>
              <p className="text-base sm:text-lg font-display tracking-widest text-primary mb-8 uppercase">
                {dev.role}
              </p>

              <div className="flex gap-3 sm:gap-4">
                {dev.instagram && (
                  <a
                    href={dev.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-muted/50 group-hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20"
                    aria-label={`Instagram - ${dev.name}`}
                  >
                    <Instagram size={24} className="sm:w-6 sm:h-6" />
                  </a>
                )}
                {dev.github && (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-muted/50 group-hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20"
                    aria-label={`GitHub - ${dev.name}`}
                  >
                    <Github size={24} className="sm:w-6 sm:h-6" />
                  </a>
                )}
                {dev.linkedin && (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-muted/50 group-hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20"
                    aria-label={`LinkedIn - ${dev.name}`}
                  >
                    <Linkedin size={24} className="sm:w-6 sm:h-6" />
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

