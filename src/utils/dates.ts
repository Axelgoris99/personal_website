type Dated = { data: { begin: Date; end?: Date; order?: number } };

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

/** "2023 – 2025", "2026 – Present" or "2021". */
export function formatYears(begin: Date, end?: Date) {
  const from = begin.getUTCFullYear();
  if (!end) return `${from} – Present`;
  const to = end.getUTCFullYear();
  return from === to ? `${from}` : `${from} – ${to}`;
}

/**
 * Entries with an `order` first (ascending), then ongoing entries,
 * then most recently ended, then most recently begun.
 */
export function byMostRecent(a: Dated, b: Dated) {
  const order = (e: Dated) => e.data.order ?? Infinity;
  const end = (e: Dated) => e.data.end?.valueOf() ?? Infinity;
  return (
    order(a) - order(b) ||
    end(b) - end(a) ||
    b.data.begin.valueOf() - a.data.begin.valueOf()
  );
}
