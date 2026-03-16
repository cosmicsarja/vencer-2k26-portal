import CircularGallery from "@/components/CircularGallery";
import { motion } from "framer-motion";

const galleryItems = [
  { image: "https://picsum.photos/seed/vencer1/800/600", text: "Opening Ceremony" },
  { image: "https://picsum.photos/seed/vencer2/800/600", text: "Hackathon" },
  { image: "https://picsum.photos/seed/vencer3/800/600", text: "Cultural Night" },
  { image: "https://picsum.photos/seed/vencer4/800/600", text: "Robo Wars" },
  { image: "https://picsum.photos/seed/vencer5/800/600", text: "Code Sprint" },
  { image: "https://picsum.photos/seed/vencer6/800/600", text: "Dance Battle" },
  { image: "https://picsum.photos/seed/vencer7/800/600", text: "Award Ceremony" },
  { image: "https://picsum.photos/seed/vencer8/800/600", text: "Team Spirit" },
  { image: "https://picsum.photos/seed/vencer9/800/600", text: "Workshop" },
  { image: "https://picsum.photos/seed/vencer10/800/600", text: "Gaming Arena" },
  { image: "https://picsum.photos/seed/vencer11/800/600", text: "DJ Night" },
  { image: "https://picsum.photos/seed/vencer12/800/600", text: "Closing Day" },
];

const Gallery = () => {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="container px-4 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl tracking-wider fest-gradient-text mb-4">Gallery</h2>
          <p className="font-body text-muted-foreground">Moments from previous editions</p>
        </motion.div>
      </div>
      <div className="flex-1 min-h-[60vh]">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="hsl(175, 80%, 50%)"
          borderRadius={0.05}
          font="bold 24px Space Grotesk"
        />
      </div>
    </div>
  );
};

export default Gallery;
