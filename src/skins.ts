/**
 * Site skins. To add one: create `src/styles/skins/<id>.css` styling
 * `:root[data-skin="<id>"]`, import it in `skins/index.css`, then list it here.
 */
export interface Skin {
  id: string;
  label: string;
  /** Text flashed on screen when switching to this skin (styled as `.skin-intro`). */
  intro?: string;
}

export const skins: Skin[] = [
  { id: "classic", label: "Classic" },
  { id: "comic", label: "Comic", intro: "BIM!" },
  { id: "minimal", label: "Minimal" },
  { id: "tarnished", label: "Tarnished", intro: "New Look Acquired" },
  { id: "undercity", label: "Undercity" },
  { id: "spirited", label: "Spirited", intro: "🍃" },
  { id: "retro", label: "Retro RPG", intro: "LEVEL UP!" },
];

export const defaultSkin = "classic";
