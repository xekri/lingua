export const replaceAll = (s: string, map: Array<any>) =>
  map.reduce((acc, [x, y]) => acc.replace(x, y), s)

export enum LetterCase {
  Low,
  Cap,
  Up,
  Other,
}
