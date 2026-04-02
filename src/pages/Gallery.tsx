import GallerySection from "@/components/GallerySection";
import PageBackground from "@/components/PageBackground";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <GallerySection />
    </div>
  );
};

export default Gallery;
