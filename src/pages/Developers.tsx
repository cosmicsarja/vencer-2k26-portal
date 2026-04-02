import ProfileCard from "@/components/ProfileCard";
import cosmicsarjaPhoto from "@/assets/cosmicsarja-photo.png";
import chetanPhoto from "@/assets/chetan.png";
import rohanPhoto from "@/assets/rohan.png";
import sahilPhoto from "@/assets/sahil.png";
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
    // Gold / amber glow for Lead Developer
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
  {
    name: "Sahil B",
    role: "Developer",
    photo: sahilPhoto,
    handle: "sahil_b",
    avatarObjectPosition: "50% 22%",
    avatarLeft: "left-[50%]",
    // Further reduced — user said still too big
    avatarHeight: "52%",
    behindGlowColor: "rgba(125, 190, 255, 0.67)",
    innerGradient: "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
    instagram: "https://www.instagram.com/sahil_b",
    github: "https://github.com/sahilb",
    linkedin: "https://linkedin.com/in/sahilb",
  },
  {
    name: "Rohan P",
    role: "Developer",
    photo: rohanPhoto,
    handle: "rohan_p",
    avatarObjectPosition: "50% 44%",
    avatarLeft: "left-[50%]",
    avatarHeight: "105%",
    behindGlowColor: "rgba(125, 190, 255, 0.67)",
    innerGradient: "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
    instagram: "https://www.instagram.com/rohan_p",
    github: "https://github.com/rohanp",
    linkedin: "https://linkedin.com/in/rohanp",
  }
];

const DeveloperCard = ({ dev, index }: { dev: Developer; index: number }) => (
  <motion.div
    style={{
      touchAction: "pan-y",
      // Explicit fixed width so cards never expand to fill grid cell and overlap
      width: "240px",
    }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative flex flex-col items-center"
  >
    {/* Lead Developer crown badge */}
    {dev.isLead && (
      <div className="relative z-10 mb-2 flex items-center gap-1.5">
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

    {/* Outer glow ring for Lead */}
    {dev.isLead && (
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.2) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    )}

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
  </motion.div>
);

const Developers = () => (
  <section className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 pt-24 sm:pt-28 md:pt-32">
    <PageBackground />
    <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h1
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wider pandora-gradient-text mb-3 font-bold"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Developers
        </motion.h1>
        <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground">
          The team behind VENCER 2K26
        </p>
      </motion.div>

      {/*
        ┌─────────────────────────────────────────────────────────────────────┐
        │  Layout strategy:                                                   │
        │  Mobile  (< 640px): flex-col, each card CENTERED — no grid         │
        │  Tablet  (640-1023px): 2×2 grid, cards centered in cells          │
        │  Laptop  (1024-1279px): 2×2 grid, GAP increased — NO OVERLAP      │
        │  Desktop (≥ 1280px): all 4 in one row                              │
        │                                                                     │
        │  Key: cards have FIXED 240px width — grid cells won't shrink them  │
        └─────────────────────────────────────────────────────────────────────┘
      */}

      {/* Mobile — single column, perfectly centered */}
      <div className="flex flex-col items-center gap-10 sm:hidden pb-16">
        {developers.map((dev, i) => (
          <DeveloperCard key={dev.name} dev={dev} index={i} />
        ))}
      </div>

      {/* Tablet (sm-lg): 2×2 grid */}
      <div className="hidden sm:grid xl:hidden grid-cols-2 gap-x-8 gap-y-12 place-items-center pb-16">
        {developers.map((dev, i) => (
          <DeveloperCard key={dev.name} dev={dev} index={i} />
        ))}
      </div>

      {/* Desktop (xl+): 4 in a row */}
      <div className="hidden xl:flex justify-center gap-10 2xl:gap-14 pb-16 flex-wrap">
        {developers.map((dev, i) => (
          <DeveloperCard key={dev.name} dev={dev} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default Developers;
