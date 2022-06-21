import { LetterCase } from "./util"

export default abstract class Converter {
  abstract wordRe: RegExp
  abstract locale0: string
  abstract locale1: string

  applyCase = (kase: LetterCase, locale, s) => {
    switch (kase) {
      case LetterCase.Low:
        return s.toLocaleLowerCase(locale)
      case LetterCase.Cap:
        return s.slice(0, 1).toLocaleUpperCase(locale) + s.slice(1).toLocaleLowerCase(locale)
      case LetterCase.Up:
        return s.toLocaleUpperCase(locale)
      default:
        return s.toLocaleLowerCase(locale)
    }
  }

  getCase = (locale: string, s: string) => {
    for (const kase of [LetterCase.Low, LetterCase.Cap, LetterCase.Up]) {
      if (s == this.applyCase(kase, locale, s))
        return kase
    }
    return LetterCase.Other
  }

  abstract convertWord(word: string): string;

  convert = (text: string): string => text.replace(
    this.wordRe,
    (word: string) => this.applyCase(
      this.getCase(this.locale0, word),
      this.locale1,
      this.convertWord(word.toLocaleLowerCase(this.locale0)))
  )
}
