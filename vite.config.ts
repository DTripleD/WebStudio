import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import" ./src/styles/_variables.scss ";`,
      },
    },
  },
  base: "/WebStudio/",
});
