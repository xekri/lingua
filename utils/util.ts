type Replace = [RegExp, string]

export const replaceAll = (s: string, map: Array<Replace>) =>
  map.reduce((acc: string, [x, y]: Replace) => acc.replace(x, y), s)

export enum LetterCase {
  Low,
  Cap,
  Up,
  Other,
}
