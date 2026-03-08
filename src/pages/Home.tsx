import { forwardRef } from "react";
import HeroSection from "@/components/HeroSection";

const Home = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <HeroSection />
    </div>
  );
});

Home.displayName = "Home";

export default Home;
