import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import chetanPhoto from "@/assets/chetan.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Developer {
  name: string;
  role: string;
  photo: string;
  handle: string;
  avatarObjectPosition?: string;
  avatarFlipX?: boolean;
  avatarLeft?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
}

const developers: Developer[] = [
  {
    name: "Cosmicsarja",
    role: "Lead Developer",
    photo: cosmicsarjaPhoto,
    handle: "cosmicsarja",
    avatarObjectPosition: "55% 30%",
    avatarLeft: "left-[44%]",
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
  {
    name: "Chetan M",
    role: " Developer",
    photo: chetanPhoto,
    handle: " Kalki__33_",
    avatarObjectPosition: "60% 20%",
    instagram: "https://www.instagram.com/kalki__33_?igsh=cnhxbHEzcXpib2dh",
    github: "https://github.com/chetanmatapati33",
    linkedin: "https://www.linkedin.com/in/chetan-mathapati-021092296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

];

const DeveloperCard = ({ dev }: { dev: Developer }) => {
  return (
    <ProfileCard
      name={dev.name}
      title={dev.role}
      handle={dev.handle}
      avatarUrl={dev.photo}
      avatarObjectPosition={dev.avatarObjectPosition}
      avatarFlipX={dev.avatarFlipX}
      avatarLeft={dev.avatarLeft}
      status="Online"
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      behindGlowEnabled={true}
      behindGlowColor="rgba(125, 190, 255, 0.67)"
      innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
      instagramUrl={dev.instagram}
      githubUrl={dev.github}
      linkedinUrl={dev.linkedin}
    />
  );
};

const Developers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const itemsPerPage = 1; // Show only 1 card at a time
  const totalSlides = developers.length;
  
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const visibleDeveloper = developers[currentIndex];

  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32 bg-gradient-to-b from-background via-slate-950/30 to-background">
      <div className="container px-4 sm:px-6 md:px-8 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider pandora-gradient-text mb-4 sm:mb-6 font-bold"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Developers
          </motion.h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* Navigation Buttons - MOVED UPSIDE */}
          <div className="flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md px-2 sm:px-4 mb-8 sm:mb-12 z-10 gap-6 sm:gap-8">
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 sm:p-4 rounded-xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md transition-all duration-300 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800/80 group relative overflow-hidden"
              aria-label="Previous developer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronLeft size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10" />
            </motion.button>

            {/* Slide Indicators - BETWEEN BUTTONS */}
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center items-center">
              {developers.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`rounded-full transition-all duration-300 min-h-2.5 ${
                    idx === currentIndex
                      ? "bg-cyan-400 w-8 sm:w-10 h-2.5 sm:h-3 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                      : "bg-slate-700 hover:bg-slate-500 w-2.5 sm:w-3 h-2.5 sm:h-3 shadow-inner"
                  }`}
                  aria-label={`Go to ${developers[idx].name}`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 sm:p-4 rounded-xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md transition-all duration-300 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-slate-800/80 group relative overflow-hidden"
              aria-label="Next developer"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronRight size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10" />
            </motion.button>
          </div>

          {/* Single Card Display - Smaller on Mobile */}
          <div className="overflow-hidden flex justify-center w-full">
            <motion.div
              key={currentIndex}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center px-2 sm:px-4"
              initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div 
                className="flex justify-center items-start w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DeveloperCard dev={visibleDeveloper} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;

