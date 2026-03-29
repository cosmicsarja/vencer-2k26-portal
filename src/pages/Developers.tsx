import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import sahilPhoto from "@/assets/sahil.png";
import rohanPhoto from "@/assets/rhohan.png";
import chetanPhoto from "@/assets/vencer-logo.png";
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
    name: "Chetan M",
    role: "Backend Developer",
    photo: chetanPhoto,
    handle: "Kalki__33_",
    instagram: "https://www.instagram.com/kalki__33_?igsh=cnhxbHEzcXpib2dh",
    github: "https://github.com/chetanmatapati33",
    linkedin: "https://linkedin.com/in/chetanm",
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
  return (
    <section className="relative w-full min-h-screen py-24 pt-32 bg-gradient-to-b from-background via-slate-950/30 to-background">
      <div className="container px-4 max-w-7xl w-full mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full pb-12">
          {developers.map((dev) => (
            <motion.div 
              key={dev.name} 
              className="flex justify-center items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <DeveloperCard dev={dev} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;

