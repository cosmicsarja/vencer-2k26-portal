import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Instagram, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
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

const DeveloperCard = ({ dev, i }: { dev: Developer; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(x, [-100, 100], [-8, 8]), { stiffness: 150 });
  const rotateY = useSpring(useTransform(y, [-100, 100], [8, -8]), { stiffness: 150 });

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width * 2 - 1;
      const mouseY = (e.clientY - rect.top) / rect.height * 2 - 1;
      x.set(mouseX * 50);
      y.set(mouseY * 50);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        rotateX, 
        rotateY,
        transformPerspective: 1200 
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: [0, -12, 0],
        scale: 1 
      }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + i * 0.1,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.04,
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px hsl(var(--primary))"
      }}
      className="relative flex flex-col items-center p-6 bg-card/90 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer group max-w-sm mx-auto transition-all duration-500 h-[600px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[hsl(var(--fest-teal)/0.1)] via-[hsl(var(--fest-cyan)/0.05)] to-[hsl(var(--fest-purple)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
      
      {/* Sparks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="spark absolute w-1.5 h-1.5 bg-[hsl(var(--fest-teal))] opacity-0 group-hover:opacity-90 transition-all duration-500 delay-200 rounded-full shadow-[0_0_8px_hsl(var(--fest-teal)/0.6)]" style={{ top: '25%', left: '25%', animation: 'spark-float 2.5s infinite 0.3s' }} />
        <div className="spark absolute w-1 h-1 bg-[hsl(var(--fest-cyan))] opacity-0 group-hover:opacity-90 transition-all duration-500 delay-400 rounded-full shadow-[0_0_6px_hsl(var(--fest-cyan)/0.6)]" style={{ top: '55%', right: '25%', animation: 'spark-float 2.5s infinite 0.8s' }} />
        <div className="spark absolute w-1.5 h-1.5 bg-[hsl(var(--fest-purple))] opacity-0 group-hover:opacity-90 transition-all duration-500 delay-600 rounded-full shadow-[0_0_8px_hsl(var(--fest-purple)/0.6)]" style={{ bottom: '35%', left: '65%', animation: 'spark-float 2.5s infinite 1.2s' }} />
      </div>

      {/* Pure Raw Photo - No Shape/Border/Ring - Just Photo */}
      <motion.img
        src={dev.photo}
        alt={dev.name}
        className="mx-auto mt-48 mb-8 w-48 h-auto sm:w-56 sm:h-auto lg:w-64 lg:h-auto max-h-[280px] object-contain shadow-xl brightness-110 z-10 flex-shrink-0 drop-shadow-2xl"
        initial={{ scale: 1.02 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      <motion.h3 
        className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-foreground drop-shadow-lg relative z-10 tracking-tight text-center px-4"
        animate={{ textShadow: ["0 0 12px hsl(var(--fest-teal)/0.6)", "0 0 20px hsl(var(--fest-cyan)/0.5)", "0 0 12px hsl(var(--fest-teal)/0.6)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {dev.name}
      </motion.h3>
      
      <p className="text-lg font-semibold tracking-wider text-muted-foreground mb-14 uppercase relative z-10 text-center px-6 py-2 bg-gradient-to-r from-muted/50 to-transparent rounded-xl backdrop-blur-sm">
        {dev.role}
      </p>

      <div className="flex gap-6 relative z-10 mt-auto">
        {dev.instagram && (
          <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--fest-teal)/0.2)] to-[hsl(var(--fest-teal)/0.1)] backdrop-blur-sm flex items-center justify-center border border-primary/30 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--fest-teal)/0.5)] hover:scale-125 transition-all duration-500 hover:rotate-12" aria-label={`Instagram - ${dev.name}`}>
            <Instagram size={22} className="text-primary drop-shadow-md" />
          </a>
        )}
        {dev.github && (
          <a href={dev.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm flex items-center justify-center border border-border hover:border-muted-foreground hover:shadow-[0_0_25px_hsl(var(--fest-cyan)/0.4)] hover:scale-125 transition-all duration-500 hover:rotate-12" aria-label={`GitHub - ${dev.name}`}>
            <Github size={22} className="text-muted-foreground drop-shadow-md" />
          </a>
        )}
        {dev.linkedin && (
          <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--fest-purple)/0.2)] to-[hsl(var(--fest-purple)/0.1)] backdrop-blur-sm flex items-center justify-center border border-primary/30 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--fest-purple)/0.5)] hover:scale-125 transition-all duration-500 hover:rotate-12" aria-label={`LinkedIn - ${dev.name}`}>
            <Linkedin size={22} className="text-primary drop-shadow-md" />
          </a>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spark-float {
          0%, 100% { transform: translateY(0px) scale(0.8) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-25px) scale(1.3) rotate(180deg); opacity: 1; }
        }
      ` }} />
    </motion.div>
  );
};

const Developers = () => {
  return (
    <section className="relative py-24 pt-32 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-slate-950/30 to-background overflow-hidden">
      <div className="container px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider pandora-gradient-text mb-6 font-bold"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Meet Our Developers
          </motion.h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The brilliant minds crafting VENCER 2K26 portal experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto w-full">
          {developers.map((dev, i) => (
            <DeveloperCard key={dev.name} dev={dev} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

