import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()]
	// server: {
	// 	cors: true,
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://8.137.50.120:8081', //实际请求地址
	// 			changeOrigin: true,
	// 			rewrite: path => path.replace(/^\/api/, ''),
	// 		},
	// 	},
	// },
});
