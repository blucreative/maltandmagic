import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// Set `base` to "/<your-repo-name>/" (with leading and trailing slashes).
// Example: if your repo is github.com/yourname/naeethim-command-centre,
// base should be '/naeethim-command-centre/'.
// If you deploy to a USER/ORG page (yourname.github.io repo itself), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
})
