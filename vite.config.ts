import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,mp3}"],
      },
      manifest: {
        name: "VENCER 2K26 — Techno-Cultural Fest",
        short_name: "VENCER 2K26",
        description: "National Level Techno-Cultural Fest at AITM Belagavi. 50+ events, ₹5L+ prizes.",
        theme_color: "#080d18",
        background_color: "#080d18",
        display: "standalone",
        start_url: "/",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/app-icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/app-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": ["framer-motion", "@radix-ui/react-dialog", "@radix-ui/react-accordion"],
          "utils-vendor": ["clsx", "class-variance-authority"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
}));
