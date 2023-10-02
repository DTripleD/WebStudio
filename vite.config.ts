import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import" ./src/styles/_variables.scss ";`,
      },
    },
  },
  base: "/WebStudio/",
});
