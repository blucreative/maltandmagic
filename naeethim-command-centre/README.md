# naeethim — Command Centre

An interactive D&D 5e (2024) character dashboard for **naeethim**, a level-10
Dwarf Barbarian (Path of the Wild Heart). Built with React + Vite, themed as
a dark "Medieval Monster Hunter" command post: HP and hit-dice tracking,
live ability/skill math, weapon attacks that recompute their damage the
moment you toggle Rage, and a Features/Spells library where hovering any
name pops up its full rules text.

Everything is saved to the browser's local storage automatically — refresh
freely, your HP, spent uses, and active toggles persist.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## Deploy to GitHub Pages

This project ships with a GitHub Actions workflow in the repo root
(`.github/workflows/deploy.yml`) that builds and deploys on every push to `main`.

### One-time setup

1. **Create a GitHub repo** and push this project to it:
   ```bash
   git init
   git add -A
   git commit -m "naeethim Command Centre"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Keep the Vite `base` path relative** in `vite.config.js`:
    ```js
    base: './'
    ```
    This keeps the built assets working whether the app is served from the
    Pages root or from its own directory.

3. **Enable GitHub Pages via Actions**: in your repo, go to
   **Settings → Pages → Build and deployment → Source**, and choose
   **GitHub Actions**.

4. Push to `main` (or run the workflow manually from the **Actions** tab —
   it's also wired up for `workflow_dispatch`). The workflow will install
   dependencies, build the app, and publish the assembled Pages site, with
   the command centre deployed under `naeethim-command-centre/`.

5. Your dashboard will be live at the Pages URL for this repo, and the app
   itself will be available at `naeethim-command-centre/` within that site.

### Manual deploy alternative

If you'd rather not use Actions, the `gh-pages` package is already wired up:

```bash
npm install
npm run build
npm run deploy
```

This pushes the contents of `dist/` to a `gh-pages` branch, which you can
then point GitHub Pages at from **Settings → Pages**.

## Updating the character as naeethim levels up

All character data lives in one place: `src/data/character.js`. Update ability
scores, HP, proficiency bonus, features, spells, etc. there — every panel in
the dashboard derives its numbers from that file plus whatever the player
toggles at runtime (e.g. Rage), so you only ever need to edit data, not UI code.

## Project structure

```
src/
  data/character.js       — naeethim's full sheet (the single source of truth)
  utils/calc.js           — pure functions that derive modifiers, skill totals,
                            live weapon-damage strings, etc.
  components/             — one file per dashboard panel
  styles/theme.css        — the "Medieval Monster Hunter" visual theme
  App.jsx                 — owns all live state (HP, feature uses, active toggles)
                            and wires the derived "active bonuses" to every panel
```
