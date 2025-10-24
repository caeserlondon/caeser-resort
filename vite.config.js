import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint({
			failOnError: false, // ← Don't stop the build
			failOnWarning: false, // ← Optional: even warnings won't block
			lintOnStart: true, // Optional: lint when dev server starts
		}),
	],
});
