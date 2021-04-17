import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // HACK for WSL2 to enable hot reloading
  server: {
    watch: {
      usePolling: true,
    },
  },
});
