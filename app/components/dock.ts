/*
 * The floating tool dock shared by the home page and the case studies. Controls
 * grow evenly to fill the bar (never below their own label), so the spacing
 * stays balanced whatever the labels are; dividers split it into groups.
 */
export const DOCK =
  "fixed bottom-6 left-1/2 z-50 flex w-[720px] max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 rounded-[16px] bg-[#15171c] p-1.5 font-cv-sans sm:gap-1.5 sm:p-2 shadow-[0_16px_40px_rgba(21,23,28,0.25)]";

const TOOL =
  "flex h-12 min-w-max flex-1 items-center justify-center gap-2 rounded-[11px] px-2.5 text-[14px] sm:px-3 font-semibold whitespace-nowrap";

export const TOOL_IDLE = `${TOOL} text-white transition-colors hover:bg-[#2a2d35]`;
export const TOOL_ACTIVE = `${TOOL} bg-cv-select-fill text-white transition-opacity hover:opacity-90`;
export const TOOL_DISABLED = `${TOOL} cursor-not-allowed text-[#5b606b]`;

export const DIVIDER = "mx-0.5 block h-6 w-px shrink-0 bg-[#3a3f4a] sm:mx-1.5";
