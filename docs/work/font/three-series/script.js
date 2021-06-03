"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  const scale = 64;
  const padding = scale;
  const lineWidth = scale / 12;
  const marginI = 1;
  const marginJ = 0;
  const height = 1;

  const f = (c, [i, j]) => {
    const strokes = strokesOf[c] || strokesOf[" "];
    strokes.forEach(stroke => {
      stroke.forEach(([m, n], index) => {
        const [x, y] = [padding + (n + (2 + marginJ) * j) / 2 * scale, padding + (m * height + (2 + marginI) * i) / 2 * scale];
        if (index == 0) context.moveTo(x, y);else context.lineTo(x, y);
      });
      context.stroke();
    });
  };

  const p = {
    tl: [0, 0],
    tc: [0, 1],
    tr: [0, 2],
    cl: [1, 0],
    cc: [1, 1],
    cr: [1, 2],
    bl: [2, 0],
    bc: [2, 1],
    br: [2, 2]
  };

  const flipV = strokes => strokes.map(stroke => stroke.map(([i, j]) => [2 - i, j]));

  const strokesOf = {
    "0": [[p.tl, p.cl]],
    "1": [[p.tl, p.tc]],
    "2": [[p.cl, p.tl, p.tc]],
    "3": [[p.tl, p.cl, p.cc]],
    "4": [[p.cl, p.cc, p.tc]],
    "5": [[p.tl, p.tc, p.cc]],
    "6": [[p.cc, p.tc, p.tl, p.cl]],
    "7": [[p.tc, p.tl, p.cl, p.cc]],
    "8": [[p.tl, p.cl, p.cc, p.tc]],
    "9": [[p.tl, p.tc, p.cc, p.cl]],
    " ": [],
    "^": [[p.tl, p.tc]],
    "-": [[p.cl, p.cc]],
    "_": [[p.bl, p.bc]],
    "=": [[p.tl, p.tc], [p.cl, p.cc]],
    "|": [[p.tc, p.bc]],
    "/": [[p.tr, p.bl]],
    "\\": [[p.tl, p.br]],
    ".": [[p.cc, p.cc]],
    "'": [[p.tc, p.cc]],
    ",": [[p.cc, p.bc]],
    ":": [[p.tc, p.tc], [p.cc, p.cc]],
    ";": [[p.tc, p.tc], [p.cc, p.bc]],
    "!": [[p.tc, p.cc], [p.bc, p.bc]],
    "?": [[p.tl, p.tr, p.cc], [p.bc, p.bc]],
    "@": [[p.tl, p.bl, p.tr, p.tl]],
    "&": [[p.bl, p.tl, p.br, p.bl]],
    "#": [[p.tl, p.tc, p.bc, p.bl, p.tl]],
    '"': [[p.tl, p.cl], [p.tc, p.cc]],
    "(": [[p.tc, p.cl, p.bc]],
    ")": [[p.tl, p.cc, p.bl]],
    "[": [[p.tc, p.tl, p.bl, p.bc]],
    "]": [[p.tl, p.tc, p.bc, p.bl]],
    "<": [[p.tl, p.cc]],
    ">": [[p.cc, p.br]],
    "{": [[p.tc, p.cl]],
    "}": [[p.cr, p.bc]],
    c: [[p.tl, p.tr, p.bl]],
    t: [[p.tr, p.tl, p.bl]],
    p: [[p.tl, p.bl, p.tr]],
    i: [[p.tl, p.bl], [p.tc, p.cc]],
    a: [[p.tr, p.bl], [p.tc, p.cl]],
    u: [[p.tl, p.tr], [p.cl, p.cc]]
  };
  strokesOf.g = strokesOf.c.concat([[p.tc, p.cc]]);
  strokesOf.d = strokesOf.t.concat([[p.cl, p.tc]]);
  strokesOf.b = strokesOf.p.concat([[p.cl, p.cc]]);
  strokesOf.ŋ = strokesOf.c.concat([[p.cl, p.cc]]);
  strokesOf.n = strokesOf.t.concat([[p.tl, p.cc]]);
  strokesOf.m = strokesOf.p.concat([[p.tc, p.cc]]);
  strokesOf.C = strokesOf.c.concat([[p.cl, p.cl]]);
  strokesOf.T = strokesOf.t.concat([[p.cc, p.cc]]);
  strokesOf.P = strokesOf.p.concat([[p.tc, p.tc]]);
  strokesOf.G = strokesOf.g.concat([[p.cl, p.cl]]);
  strokesOf.D = strokesOf.d.concat([[p.cc, p.cc]]);
  strokesOf.B = strokesOf.b.concat([[p.tc, p.tc]]);

  for (const [c, d] of ["ŋ", "n", "m", "i", "a", "u"]) strokesOf[c.toUpperCase()] = strokesOf[c].concat([[p.bc, p.bc]]);

  for (const [c, d] of [["c", "x"], ["t", "s"], ["p", "f"], ["g", "h"], ["d", "z"], ["b", "w"], ["ŋ", "j"], ["n", "r"], ["m", "v"], ["i", "e"], ["a", "ə"], ["u", "o"]]) {
    strokesOf[d] = flipV(strokesOf[c]);
    strokesOf[d.toUpperCase()] = flipV(strokesOf[c.toUpperCase()]);
  }

  const textarea = document.querySelector("textarea");

  const onInput = event => {
    const lines = textarea.value.split("\n");
    const m = lines.length;
    const n = Math.max(...lines.map(line => line.length));
    canvas.width = (2 * n + marginJ * (n - 1)) / 2 * scale + padding * 2;
    canvas.height = (2 * height * m + marginI * (m - 1)) / 2 * scale + padding * 2;
    context.lineWidth = lineWidth;
    context.lineJoin = "round";
    context.lineCap = "round"; //context.imageSmoothingEnabled = false

    context.strokeStyle = "white";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    lines.forEach((line, i) => {
      [...line].forEach((c, j) => f(c, [i, j]));
    });
  };

  textarea.addEventListener("input", onInput);
  onInput();
});