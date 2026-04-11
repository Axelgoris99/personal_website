# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:4321)
npm run build      # Type-check + build for production
npm run preview    # Preview production build
```

`astro check` (part of build) runs TypeScript type-checking on `.astro` files.

## Architecture

This is an **Astro 4** personal portfolio/CV website with no frontend framework (no React/Vue/Svelte). All interactivity is vanilla JS in `<script>` tags.

### Content Collections

All portfolio data lives in `src/content/` as Markdown files with YAML frontmatter. The schema for each collection is defined in `src/content/config.ts` using Zod:

- **`work/`** — professional experience entries (`title`, `description`, `begin`, `end`, `location`, `tags`, `img`, optional `imgs[]`)
- **`project/`** — personal projects (`title`, `description`, `begin`, `end`, `tags`, `img`, optional `favorite`)
- **`association/`** — associative/volunteer work (same shape as `project`)
- **`render/`** — 3D renders/artwork (`title`, `description`, `img`, optional `imgs[]`, `video`, `favorite`)
- **`education/`** — education entries (`title`, `description`, `location`, `beginYear`, `endYear`, `tags`, `img`)

Dates use `z.coerce.date()` — YAML values like `2025-10` are accepted.

### Page Structure

- `src/layouts/BaseLayout.astro` — root layout: `<head>`, `<Nav>`, `<slot>`, `<BackToTop>`, `<Footer>`. Handles light/dark theme via CSS custom properties and the `.theme-dark` class.
- `src/pages/` — top-level pages (`index`, `about`, `work`, `project`, `render`) plus dynamic detail pages (`[...slug].astro`) for each collection.
- Dynamic routes call `getStaticPaths()` which maps collection entries to slugs.

### Theming

Light/dark mode is driven entirely by CSS custom properties defined in `BaseLayout.astro`. Background images are lazy-loaded (swapped in once the `loaded` class is set on `<html>`). No CSS framework is used — styling is scoped per component via Astro's `<style>` blocks plus global CSS variables.

### Adding New Content

To add a new entry (e.g. a new project), create a `.md` file in the appropriate `src/content/<collection>/` directory with frontmatter matching the Zod schema in `config.ts`. Images go in `public/assets/`.
