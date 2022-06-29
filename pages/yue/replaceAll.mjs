export default (s, xss) =>
  xss.reduce((acc, [x, y]) => acc.replace(x, y), s)
