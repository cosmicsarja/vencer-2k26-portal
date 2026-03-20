import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import sahilPhoto from "@/assets/sahil.png";
import rohanPhoto from "@/assets/rhohan.png";
import niveditaPhoto from "@/assets/nivedita.png";
import { motion } from "framer-motion";

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
  {
    name: "Nivedita A",
    role: "Backend Developer",
    photo: niveditaPhoto,
    handle: "niveditaakkimaradi",
    instagram: "https://instagram.com/niveditaakkimaradi",
    github: "https://github.com/niveditaakkimaradi",
    linkedin: "https://linkedin.com/in/niveditaakkimaradi",
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
  return (
    <section className="relative py-24 pt-32 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-slate-950/30 to-background overflow-y-auto overflow-x-hidden">
      <div className="container px-4 max-w-7xl w-full">
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

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto w-full">
          {developers.map((dev) => (
            <div key={dev.name} className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
              <DeveloperCard dev={dev} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

