import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Path
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/components", replacement: path.join(__dirname, "./src/component/") },
      { find: "@/configs", replacement: path.join(__dirname, "./configs/") },
    ],
  },
});
