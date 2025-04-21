import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: '/src' },
  //     {
  //       find: '@utils',
  //       replacement: resolve(__dirname, 'src/utils'),
  //     },
  //   ],
  // },
  server: {
    proxy: {
      '/api': {
        target: 'https://compass-dev.inphrcare.com',
        changeOrigin: true,
        secure: false, // 필요시 (https 인증서 무시)
      },
    },
  },
});
