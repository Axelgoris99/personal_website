/**
 * Site skins. To add one: create `src/styles/skins/<id>.css` styling
 * `:root[data-skin="<id>"]`, import it in `skins/index.css`, then list it here
 * with a swatch for the picker.
 */
export interface Skin {
  id: string;
  label: string;
  /** Text flashed on screen when switching to this skin (styled as `.skin-intro`). */
  intro?: string;
  /** Three colours (background, accent, second accent) for the picker swatch. */
  swatch: [string, string, string];
}

export const skins: Skin[] = [
  { id: "classic", label: "Classic", swatch: ["#ffffff", "#c561f6", "#5c4e63"] },
  { id: "comic", label: "Comic", intro: "BIM!", swatch: ["#fbf5e8", "#ff2e88", "#00c8f0"] },
  { id: "minimal", label: "Minimal", swatch: ["#ffffff", "#0a0a0a", "#a3a3a3"] },
  { id: "tarnished", label: "Tarnished", intro: "New Look Acquired", swatch: ["#0c0b09", "#c9a85a", "#5c5444"] },
  { id: "undercity", label: "Undercity", intro: "BOOM!", swatch: ["#100d16", "#ff3fa4", "#39ff9f"] },
  { id: "spirited", label: "Spirited", intro: "🍃", swatch: ["#6fb7e6", "#3f7d3a", "#fdf8ee"] },
  { id: "retro", label: "Retro RPG", intro: "LEVEL UP!", swatch: ["#0a1262", "#3346c2", "#ffe066"] },
  { id: "parchment", label: "Parchment", swatch: ["#f3e6c6", "#8b1e1e", "#2e2416"] },
  { id: "belle", label: "Belle Époque", intro: "✿", swatch: ["#1a1b1f", "#b8954a", "#a3262a"] },
  { id: "cyberpunk", label: "Cyberpunk", intro: "LINK ESTABLISHED", swatch: ["#0a0a0f", "#fcee0a", "#00f0ff"] },
  { id: "stargazer", label: "Stargazer", intro: "✦", swatch: ["#0b1026", "#ff8a3d", "#7ad7ff"] },
  { id: "hollow", label: "Hollow", intro: "◆", swatch: ["#0b0e14", "#e8eef5", "#a7d8ff"] },
];

export const defaultSkin = "classic";
