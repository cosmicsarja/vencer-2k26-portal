import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import sahilPhoto from "@/assets/sahil.png";
import rohanPhoto from "@/assets/rhohan.png";
import chetanPhoto from "@/assets/vencer-logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Developer {
  name: string;
  role: string;
  photo: string;
  handle: string;
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
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
  {
    name: "Chetan M",
    role: "Backend Developer",
    photo: chetanPhoto,
    handle: " Kalki__33_",
    instagram: "https://www.instagram.com/kalki__33_?igsh=cnhxbHEzcXpib2dh",
    github: "https://github.com/chetanmatapati33",
    linkedin: "https://www.linkedin.com/in/chetan-mathapati-021092296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Sahil Barbal",
    role: "Frontend Specialist",
    photo: sahilPhoto,
    handle: "sahilbarbal",
    instagram: "https://instagram.com/sahilbarbal",
    github: "https://github.com/sahilbarbal",
    linkedin: "https://linkedin.com/in/sahilbarbal",
  },
  {
    name: "Rohan Patil",
    role: "UI/UX Designer",
    photo: rohanPhoto,
    handle: "rohanpatel",
    instagram: "https://instagram.com/rohanpatel.dev",
    github: "https://github.com/rohanpatel",
    linkedin: "https://linkedin.com/in/rohanpatel",
  },
];

const DeveloperCard = ({ dev }: { dev: Developer }) => {
  return (
    <ProfileCard
      name={dev.name}
      title={dev.role}
      handle={dev.handle}
      avatarUrl={dev.photo}
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
        <div className="relative w-full">
          {/* Single Card Display */}
          <div className="overflow-hidden flex justify-center">
            <motion.div
              className="w-full max-w-sm flex justify-center px-2 sm:px-4 pb-4 sm:pb-8 md:pb-12"
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex justify-center items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <DeveloperCard dev={visibleDeveloper} />
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Buttons - Mobile Optimized */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
            {/* Slide Indicators - Primary on Mobile */}
            <div className="flex gap-1.5 sm:gap-2.5 md:gap-3 flex-wrap justify-center px-2">
              {developers.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`rounded-full transition-all duration-300 min-h-3 ${
                    idx === currentIndex
                      ? "bg-cyan-400 w-8 sm:w-10 h-3 sm:h-3.5"
                      : "bg-slate-600 hover:bg-slate-500 w-3 sm:w-3.5 h-3 sm:h-3.5"
                  }`}
                  aria-label={`Go to ${developers[idx].name}`}
                />
              ))}
            </div>

            {/* Arrow Buttons - Horizontal Layout */}
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 px-2">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 md:p-3.5 rounded-full border border-cyan-500/50 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-300 text-cyan-400 hover:text-cyan-300 active:bg-slate-700"
                aria-label="Previous developer"
              >
                <ChevronLeft size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </motion.button>

              {/* Developer Name Counter */}
              <div className="text-center min-w-fit">
                <p className="text-sm sm:text-base font-semibold text-cyan-400">
                  {visibleDeveloper.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {currentIndex + 1}/{totalSlides}
                </p>
              </div>

              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 md:p-3.5 rounded-full border border-cyan-500/50 hover:border-cyan-400 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-300 text-cyan-400 hover:text-cyan-300 active:bg-slate-700"
                aria-label="Next developer"
              >
                <ChevronRight size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;

