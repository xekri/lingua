const date = d => {
  const year = d.getFullYear();
  const start = new Date(year, 0, 1);
  const diff = d - start;
  const msPerDay = 1000 * 60 * 60 * 24;
  const day = diff / msPerDay;

  return [year + 10000, day];
}

const now = () => date(new Date());

const dateString = (year, day, base = 10, precision = 5) => {
  day = Math.round(day * base ** precision) / base ** precision;
  const pad = "0".repeat(precision - day.toString(base).split(".")[1].length);
  return `${year.toString(base).toUpperCase()}/${day.toString(base).toUpperCase()}${pad}`;
}
