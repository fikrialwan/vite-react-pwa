import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            handler: "NetworkFirst",
            urlPattern: /\/api\/.*\//,
            method: "GET",
            options: {
              backgroundSync: {
                name: "myQueueName",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
        ],
      },
      includeAssets: ["**/*"],
    }),
  ],
});
