type Dated = { data: { begin: Date; end?: Date } };

const month = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

/** "Sep 2023 – Aug 2025", "Sep 2026 – Present" or "Feb 2021". */
export function formatRange(begin: Date, end?: Date) {
  if (!end) return `${month(begin)} – Present`;
  const [from, to] = [month(begin), month(end)];
  return from === to ? from : `${from} – ${to}`;
}

/** Ongoing entries first, then most recently ended, then most recently begun. */
export function byMostRecent(a: Dated, b: Dated) {
  const end = (e: Dated) => e.data.end?.valueOf() ?? Infinity;
  return end(b) - end(a) || b.data.begin.valueOf() - a.data.begin.valueOf();
}
