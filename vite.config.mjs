import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Automatic JSX runtime (no need to import React in each file)
      jsxRuntime: "automatic",
      // Explicitly include JS and JSX files
      include: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    }),
  ],
  optimizeDeps: {
    include: ["@reduxjs/toolkit"],
  },
});
