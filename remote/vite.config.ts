import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

const PORT = 4010;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteLogo": "./src/shared/components/RemoteLogo/RemoteLogo.tsx",
      },
      shared: ["react"],
    }),
  ],
  base: `http://localhost:${PORT}`,
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: PORT,
    open: false,
  },
  preview: {
    port: PORT,
  },
});
