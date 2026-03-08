import { lazy, Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Lazy load heavy background components
const ParticleBackground = lazy(() => import("./ParticleBackground"));
const JellyfishBackground = lazy(() => import("./JellyfishBackground"));

const Layout = memo(() => {
  return (
    <div className="min-h-screen bg-background relative">
      <Suspense fallback={null}>
        <ParticleBackground />
        <JellyfishBackground />
      </Suspense>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
