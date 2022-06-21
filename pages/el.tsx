import Converter from './Converter'
import Textareas from '../components/textareas'
import { replaceAll } from './util'

export default () => {
  const { convert } = new class extends Converter {
    wordRe = /\S+/ig
    locale0 = 'el-GR'
    locale1 = 'en-GB'

    convertWord = (word: string) => replaceAll(word.normalize('NFKD'), [
      [/α/g, 'a'],
      [/β/g, 'b'],
      [/γ/g, 'c'],
      [/δ/g, 'd'],
      [/ε/g, 'e'],
      [/ϝ/g, 'v'],
      [/ζ/g, 'z'],
      [/η/g, 'e\u0304'],
      [/ι/g, 'i'],
      [/θ/g, 'y'],
      [/κ/g, 'k'],
      [/λ/g, 'l'],
      [/μ/g, 'm'],
      [/ν/g, 'n'],
      [/ξ/g, 'ks'],
      [/ο/g, 'o'],
      [/π/g, 'p'],
      [/ϻ/g, 'ṣ'],
      [/ϙ/g, 'q'],
      [/ρ/g, 'r'],
      [/[σς]/g, 's'],
      [/τ/g, 't'],
      [/υ/g, 'u'],
      [/φ/g, 'f'],
      [/χ/g, 'x'],
      [/ψ/g, 'ps'],
      [/ω/g, 'o\u0304'],

      [/\u0313/g, ''],
      [/\u0314/g, 'h'],
      [/^(.+)h/g, 'h$1'],
      [/\u0344/g, '\u0308\u0301'],
      [/\u0342/g, '\u0302'],
      [/\u0304(?=\u0302)/g, ''],
      [/\u0345/g, 'i'],
    ]).normalize('NFKC')
  }()

  return <>
    <h2>greek</h2>
    <Textareas lang='el' convert={convert}>{
      `Α Β Γ Δ Ε Ϝ Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ϻ Ϙ Ρ Σ Τ Υ Φ Χ Ψ Ω

Συνέθιζε δὲ ἐν τῷ νομίζειν μηδὲν πρὸς ἡμᾶς εἶναι τὸν θάνατον ἐπεὶ πᾶν ἀγαθὸν καὶ κακὸν ἐν αἰσθήσει· στέρησις δέ ἐστιν αἰσθήσεως ὁ θάνατος.
ὅθεν γνῶσις ὀρθὴ τοῦ μηθὲν εἶναι πρὸς ἡμᾶς τὸν θάνατον ἀπολαυστὸν ποιεῖ τὸ τῆς ζωῆς θνητόν, οὐκ ἄπειρον προστιθεῖσα χρόνον, ἀλλὰ τὸν τῆς ἀθανασίας ἀφελομένη πόθον.
οὐθὲν γάρ ἐστιν ἐν τῷ ζῆν δεινόν τῷ κατειληφότι γνησίως τὸ μηδὲν ὑπάρχειν ἐν τῷ μὴ ζῆν δεινόν.
ὥστε μάταιος ὁ λέγων δεδιέναι τὸν θάνατον οὐχ ὅτι λυπήσει παρών, ἀλλ’ ὅτι λυπεῖ μέλλων.
ὅ γὰρ παρὸν οὐκ ἐνοχλεῖ, προσδοκώμενον κενῶς λυπεῖ.
τὸ φρικωδέστατον οὖν τῶν κακῶν ὁ θάνατος οὐθὲν πρὸς ἡμᾶς, ἐπειδήπερ ὅταν μὲν ἡμεῖς ὦμεν, ὁ θάνατος οὐ πάρεστιν, ὅταν δὲ ὁ θάνατος παρῇ, τόθ’ ἡμεῖς οὐκ ἐσμέν.
οὔτε οὖν πρὸς τοὺς ζῶντάς ἐστιν οὔτε πρὸς τοὺς τετελευτηκότας, ἐπειδήπερ περὶ οὕς μὲν οὐκ ἔστιν, οἳδ’ οὐκέτι εἰσίν.
Ἀλλ’ οἱ πολλοὶ τὸν θάνατον ὁτὲ μὲν ὡς μέγιστον τῶν κακῶν φεύγουσιν, ὁτὲ δὲ ὡς ἀνάπαυσιν τῶν ἐν τῷ ζῆν <κακῶν αἱροῦνται. ὁ δὲ σοφὸς οὔτε παραιτεῖται τὸ ζῆν> οὔτε φοβεῖται τὸ μὴ ζῆν.
οὔτε γὰρ αὐτῷ προσίσταται τὸ`
    }</Textareas>

    <a href='http://wiki.epicurism.info/Letter_to_Menoeceus/'>source of default text</a>
  </>
}
