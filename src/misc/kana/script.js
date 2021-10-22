const table = `
あ ア;い イ;う ウ;え 𛀀;お オ
か カ;き キ;く ク;け ケ;こ コ
が ガ;ぎ ギ;ぐ グ;げ ゲ;ご ゴ
さ サ;し シ;す ス;せ セ;そ ソ
ざ ザ;じ ジ;ず ズ;ぜ ゼ;ぞ ゾ
た タ;ち チ;つ ツ;て テ;と ト
だ ダ;ぢ ヂ;づ ヅ;で デ;ど ド
な ナ;に ニ;ぬ ヌ;ね ネ;の ノ
は ハ;ひ ヒ;ふ フ;へ ヘ;ほ ホ
ば バ;び ビ;ぶ ブ;べ ベ;ぼ ボ
ま マ;み ミ;む ム;め メ;も モ

や ヤ
\u{1B006} \u{1B120}
ゆ ユ;𛀁 エ;よ ヨ

ら ラ;り リ;る ル;れ レ;ろ ロ

わ ワ;ゐ ヰ
\u{1b11f} \u{1b122}
ゑ ヱ;を ヲ

ぁ ァ;ぃ ィ;ぅ ゥ;ぇ ェ;ぉ ォ
ゃ ャ;ゅ ュ;ょ ョ
っ ッ;ゔ ヴ
`
  .replace(/;/g, "\n")
  .split("\n")
  .filter(x => x != "")
  .map(x => x.split(" "));

document.addEventListener("DOMContentLoaded", () => {
  const taIn = document.getElementById("in");
  const taOut = document.getElementById("out");

  const f = () => {
    let s = taIn.value;
    s = s.replace(/[ァ-ンヴ]+/g, x => `<<<IMMUTABLE>>>${x}<<<END IMMUTABLE>>>`);
    s = table.reduce((previous, [x, y]) => previous.replace(new RegExp(x, "g"), y), s);
    s = s.replace(/<<<IMMUTABLE>>>([ァ-ンヴ]+)<<<END IMMUTABLE>>>/g, (_, immutable) =>
      table.reduce((previous, [x, y]) => previous.replace(new RegExp(y, "g"), x), immutable)
    );
    taOut.value = s;
  };

  for (const e of document.querySelectorAll(".trigger"))
    e.addEventListener("input", f);

  f();
})
