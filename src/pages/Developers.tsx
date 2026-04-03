import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import chetanPhoto from "@/assets/chetan.png";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import PageBackground from "@/components/PageBackground";

interface Developer {
  name: string;
  role: string;
  photo: string;
  handle: string;
  avatarObjectPosition?: string;
  avatarHeight?: string;
  avatarFlipX?: boolean;
  avatarLeft?: string;
  isLead?: boolean;
  behindGlowColor?: string;
  innerGradient?: string;
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
    avatarHeight: "90%",
    isLead: true,
    behindGlowColor: "rgba(255, 190, 70, 0.75)",
    innerGradient: "linear-gradient(145deg,#7c5c1a99 0%,#f5c84255 100%)",
    instagram: "https://instagram.com/cosmicsarja",
    github: "https://github.com/cosmicsarja",
    linkedin: "https://linkedin.com/in/cosmicsarja",
  },
  {
    name: "Chetan M",
    role: "Developer",
    photo: chetanPhoto,
    handle: "kalki__33_",
    avatarObjectPosition: "62% 22%",
    avatarLeft: "left-[48%]",
    avatarHeight: "90%",
    behindGlowColor: "rgba(125, 190, 255, 0.67)",
    innerGradient: "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
    instagram: "https://www.instagram.com/kalki__33_?igsh=cnhxbHEzcXpib2dh",
    github: "https://github.com/chetanmatapati33",
    linkedin: "https://www.linkedin.com/in/chetan-mathapati-021092296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const DeveloperCard = ({ dev, index }: { dev: Developer; index: number }) => (
  <motion.div
    style={{
      touchAction: "pan-y",
    }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative flex flex-col items-center w-[260px] sm:w-[300px]"
  >
    {/* Badge container with fixed height to ensure cards align even if one isn't lead */}
    <div className="h-8 mb-2 flex items-center justify-center w-full">
      {dev.isLead && (
        <div className="relative z-10">
          <span
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, #f5a623, #f7cc50, #e08c10)",
              color: "#1a0e00",
              boxShadow: "0 0 16px rgba(245,166,35,0.6), 0 0 32px rgba(245,166,35,0.25)",
            }}
          >
            <Crown className="w-3 h-3" />
            Lead Developer
          </span>
        </div>
      )}
    </div>

    {/* Outer glow ring for Lead */}
    {dev.isLead && (
      <div
        className="absolute inset-0 top-10 rounded-2xl pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.2) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    )}

    <div className="w-[260px] h-[362px] sm:w-[300px] sm:h-[418px] relative">
      <ProfileCard
        name={dev.name}
        title={dev.role}
        handle={dev.handle}
        avatarUrl={dev.photo}
        avatarObjectPosition={dev.avatarObjectPosition}
        avatarLeft={dev.avatarLeft}
        avatarHeight={dev.avatarHeight}
        status="Online"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        behindGlowEnabled={true}
        behindGlowColor={dev.behindGlowColor ?? "rgba(125, 190, 255, 0.67)"}
        innerGradient={dev.innerGradient ?? "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"}
        instagramUrl={dev.instagram}
        githubUrl={dev.github}
        linkedinUrl={dev.linkedin}
      />
    </div>
  </motion.div>
);

const Developers = () => (
  <section className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32">
    <PageBackground />
    <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16 w-full max-w-4xl"
      >
        <motion.h1
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider pandora-gradient-text mb-3 font-bold inline-block"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Developers
        </motion.h1>
        <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground w-full">
          The team behind VENCER 2K26
        </p>
      </motion.div>

      {/* Two cards centered side by side, aligned at top so profile cards match */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-start justify-center pb-16 w-full max-w-4xl mx-auto">
        {developers.map((dev, i) => (
          <div key={dev.name} className="flex justify-center w-full sm:w-auto">
            <DeveloperCard dev={dev} index={i} />
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Developers;
