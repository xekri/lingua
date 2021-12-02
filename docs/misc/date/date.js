const date = d => {
  const year = d.getFullYear();
  const start = new Date(year, 0, 1);
  const diff = d - start;
  const msPerDay = 1000 * 60 * 60 * 24;
  const day = diff / msPerDay;

  return [year + 10000, day];
}

const now = () => date(new Date());

const digits = {
  0: ["0", "A", "Α", " ", " ",],
  1: ["1", "B", "Β", "▗", "╴",],
  2: ["2", "C", "Γ", "▝", "╵",],
  3: ["3", "D", "Δ", "▐", "┘",],
  4: ["4", "E", "Ε", "▖", "╶",],
  5: ["5", "F", "Ϝ", "▄", "─",],
  6: ["6", "G", "Ζ", "▞", "└",],
  7: ["7", "H", "Η", "▟", "┴",],
  8: ["8", "I", "Θ", "▘", "╷",],
  9: ["9", "J", "Ι", "▚", "┐",],
  A: ["A", "K", "Κ", "▀", "│", "𝟘", `0\u0305`,],
  B: ["B", "L", "Λ", "▜", "┤", "𝟙", `1\u0305`,],
  C: ["C", "M", "Μ", "▌", "┌", "𝟚", `2\u0305`,],
  D: ["D", "N", "Ν", "▙", "┬", "𝟛", `3\u0305`,],
  E: ["E", "O", "Ξ", "▛", "├", "𝟜", `4\u0305`,],
  F: ["F", "P", "Ο", "█", "┼", "𝟝", `5\u0305`,],
};

const dateString = (year, day, base = 10, precision = 5) => {
  day = Math.round(day * base ** precision) / base ** precision;
  const pad = "0".repeat(precision - day.toString(base).split(".")[1].length);
  let s = `${year.toString(base).toUpperCase()}/${day.toString(base).toUpperCase()}${pad}`;
  if (base == 16)
    s = s
      .replace(/[0-9]/g, x => digits[x][2])
      .replace(/[A-F]/g, x => digits[x][2]);
  return s;
}
