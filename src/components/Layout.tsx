import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import JellyfishBackground from "./JellyfishBackground";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <JellyfishBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;