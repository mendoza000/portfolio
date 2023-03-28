import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		target: "es2018",
		outDir: "dist",
		rollupOptions: {
			input: {
				main: "./index.html",
			},
		},
	},
	esbuild: {
		jsxFactory: "React.createElement",
		jsxFragment: "React.Fragment",
	},
});
