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
        // Raise the per-file precache limit to 5 MB
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        // Only precache core app assets; exclude large poster & avatar images
        globPatterns: ["**/*.{js,css,html,ico,svg,webp,jpg,jpeg,mp3}"],
        globIgnores: [
          "**/posters/**",
          "**/assets/*avatar*",
          "**/assets/*bg*",
        ],
        // Serve excluded large images via runtime caching (NetworkFirst)
        runtimeCaching: [
          {
            urlPattern: /\/(posters|assets)\/.+\.(png|jpg|jpeg|webp)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "large-images",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
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
