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
  const rotateX = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100 });
  const rotateY = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100 });

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const handleMouseMove = (e: MouseEvent) => {
      const rectCurrent = card.getBoundingClientRect();
      const mouseX = e.clientX - rectCurrent.left - rectCurrent.width / 2;
      const mouseY = e.clientY - rectCurrent.top - rectCurrent.height / 2;
      x.set(mouseX);
      y.set(mouseY);
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
        transformPerspective: 1000 
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
        scale: 1.05,
        y: -20,
        boxShadow: "0 35px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.1)"
      }}
      className="relative flex flex-col items-center p-10 bg-gradient-to-br from-slate-900/80 via-blue-900/30 to-purple-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-glow overflow-hidden cursor-pointer group max-w-sm mx-auto"
    >
      {/* Magic Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-105 blur-xl animate-pulse-glow" />
      
      {/* Spark Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="spark absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-200" style={{ top: '20%', left: '20%', animation: 'spark-float 2s infinite 0.5s' }} />
        <div className="spark absolute w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-300" style={{ top: '60%', right: '20%', animation: 'spark-float 2s infinite 1s' }} />
        <div className="spark absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all delay-400" style={{ bottom: '30%', left: '60%', animation: 'spark-float 2s infinite 1.5s' }} />
      </div>

      <div className="relative w-52 h-52 sm:w-60 sm:h-60 mb-10 overflow-hidden rounded-3xl ring-8 ring-white/10 group-hover:ring-primary/50 transition-all z-10">
        <motion.img
          src={dev.photo}
          alt={dev.name}
          className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-700"
          whileHover={{ scale: 1.15 }}
        />
      </div>

      <motion.h3 
        className="font-heading text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent drop-shadow-2xl relative z-10"
        animate={{ textShadow: ["0 0 10px rgba(59,130,246,0.5)", "0 0 20px rgba(59,130,246,0.8)", "0 0 10px rgba(59,130,246,0.5)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {dev.name}
      </motion.h3>
      
      <p className="text-lg font-display tracking-widest text-primary/90 mb-10 uppercase letter-spacing-2 relative z-10">
        {dev.role}
      </p>

      <div className="flex gap-4 relative z-10">
        {dev.instagram && (
          <a
            href={dev.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-2xl hover:shadow-pink-500/50 hover:scale-125 transition-all duration-400 hover:rotate-12 group/social"
            aria-label={`Instagram - ${dev.name}`}
          >
            <Instagram size={28} className="drop-shadow-lg" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover/social:scale-110 transition-transform origin-center" />
          </a>
        )}
        {dev.github && (
          <a
            href={dev.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-2xl hover:shadow-gray-800/50 hover:scale-125 transition-all duration-400 hover:rotate-12 group/social"
            aria-label={`GitHub - ${dev.name}`}
          >
            <Github size={28} className="drop-shadow-lg" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover/social:scale-110 transition-transform origin-center" />
          </a>
        )}
        {dev.linkedin && (
          <a
            href={dev.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-2xl hover:shadow-blue-600/50 hover:scale-125 transition-all duration-400 hover:rotate-12 group/social"
            aria-label={`LinkedIn - ${dev.name}`}
          >
            <Linkedin size={28} className="drop-shadow-lg" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover/social:scale-110 transition-transform origin-center" />
          </a>
        )}
      </div>

      <style jsx>{`
        @keyframes spark-float {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) scale(1.2) rotate(180deg); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .shadow-glow {
          box-shadow: 0 0 50px rgba(99, 102, 241, 0.4);
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
};

const Developers = () => {
  return (
    <section className="relative py-24 pt-28 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/30 to-black">
      <div className="container px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Meet the Developers
          </motion.h1>
          <p className="font-body text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            The cosmic minds powering VENCER 2K26 portal ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
          {developers.map((dev, i) => (
            <DeveloperCard key={dev.name} dev={dev} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

