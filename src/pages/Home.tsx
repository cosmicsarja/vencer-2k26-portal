import { forwardRef } from "react";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <HeroSection />
      <GallerySection />
    </div>
  );
});

Home.displayName = "Home";

export default Home;

