const fs = require("fs");
const yonh = require("yonh");
const jyutpingTableParser = require('jyutping-table-parser');
const jyutpingTable = jyutpingTableParser.parseJyutpingInput();
const show = require("./show.js");

const yue = Object.fromEntries(
  jyutpingTable
    .concat([
      { ch: "十", infoArray: [{ jyutping: ["sap6"] }] },
    ])
    .filter(x => "infoArray" in x)
    .map(x => {
      const c = x.ch;
      let mcs = yonh.lookup(c
        .replace(/你/, "伱")
        .replace(/咗/, "左")
      );

      if (!Array.isArray(mcs))
        mcs = [mcs];

      return [c, x.infoArray.map(info => {
        if (info.sc && /1\.[1-6]/.test(info.sc))
          return null;

        if (info.en == "s")
          return null;

        let [initial, final, tone] = info.jyutping[0]
          .match(/^([^ieaouy]*)(.*)([1-6])$/).slice(1);

        if (/^(eo|oet|e[ump]|a)$/.test(final))
          return null;

        tone = parseInt(tone);
        if (/[ktp]/.test(final)) {
          if (![1, 3, 6].includes(tone))
            return null;

          tone = {
            1: 7,
            3: 8,
            6: 9,
          }[tone];

          final = final
            .replace(/k$/, "g")
            .replace(/t$/, "n")
            .replace(/p$/, "m")
        }
        tone = [null, 0, 1, 2, 4, 5, 6, 3, 3, 7][tone];
        const voice = 4 <= tone;
        tone = tone %= 4;

        final = final
          .replace(/ng$/, "g")
          .replace(/a/g, "r")
          .replace(/rr/, "a")
          .replace(/oe|eo/, "ơ")
          .replace(/yu/, "y")
          .replace(/(?<!^)i$/, "j")
          .replace(/(?<!^)u$/, "v")
          .replace(/ơn/, "on")
          .replace(/ej/, "i")
          .replace(/ov/, "u")
          ;

        initial = initial
          .replace(/^k/, "kx")
          .replace(/^g/, "k")
          .replace(/^t/, "tx")
          .replace(/^d/, "t")
          .replace(/^c/, "ŧx")
          .replace(/^z/, "ŧ")
          .replace(/^p/, "px")
          .replace(/^b/, "p")
          .replace(/^ng/, "g")
          .replace(/^h/, "x")
          .replace(/w/, "v")
          ;

        if (/^[iyơ]/.test(final))
          initial = initial.replace(/j$/, "")
        else if (/^u/.test(final))
          initial = initial.replace(/v$/, "")

        if (/^ơ/.test(initial + final)) {
          initial = "j";
          final = final.replace(/ơ/, "o");
        }
        if (/v/.test(initial))
          final = final.replace(/rj/, "i");

        if (voice)
          initial = initial
            .replace(/^k/, "c")
            .replace(/^t/, "d")
            .replace(/^ŧ/, "đ")
            .replace(/^p/, "b")
            .replace(/^x/, "h")
            .replace(/^s/, "z")
            .replace(/^f/, "w")
            ;
        else
          initial = initial
            .replace(/^(?=[gnmljv]?$)/, "q");

        if (tone < 2)
          initial = initial
            .replace(/(?<=^[cdđb])(?!x)/, "h")
            .replace(/(?<=^[cdđb])x/, "");

        if (mcs.some(mc => mc.initial.sjeng == "疑"))
          initial = initial.replace(/(?<=^q?)(?=[jv]?$)/, "g");
        if (mcs.some(mc => mc.initial.sjeng == "日"))
          initial = initial.replace(/(?<=^q?)j?(?=$)/, "ṇ");
        if (mcs.some(mc => mc.initial.sjeng == "匣"))
          initial = initial
            .replace(/^(?=[jv]?$)/, "h")
            .replace(/w/, "hv");
        if (mcs.some(mc => ["曉", "見", "溪"].includes(mc.initial.sjeng)))
          initial = initial
            .replace(/^(?<=^q)(?=[jv]?$)/, "x")
            .replace(/f/, "xv");
        if (mcs.some(mc => mc.initial.sjeng == "滂"))
          initial = initial.replace(/^f/, "fx");
        if (mcs.every(mc => !["精", "清", "從", "心", "邪",].includes(mc.initial.sjeng)))
          initial = initial
            .replace(/s/, "ṣ")
            .replace(/z/, "ẓ")
            .replace(/ŧ/, "ṭ")
            .replace(/đ/, "ḍ");

        if (!mcs.some(mc => mc.final.sjep == "止"))
          final = final.replace(/^i$/, "ej")
        if (mcs.some(mc => ["蟹", "止"].includes(mc.final.sjep)))
          final = final.replace(/ơj/, "uj");
        if (mcs.some(mc => mc.final.sjep == "遇"))
          final = final.replace(/ơj/, "y");
        if (!mcs.some(mc => mc.final.yonh) == "模")
          final = final.replace(/^u$/, "ov");
        if (mcs.some(mc => mc.final.sjep == "咸" && mc.final.ho == "開口" && mc.final.tongx == 1))
          final = final.replace(/rm/, "om");

        const triple = [initial, final, tone];
        return triple.concat([show.combining(...triple), mcs.length]);
      }).filter(y => y)];
    })
);

const path = "yue.tsv";
fs.writeFileSync(path, "character\tinitial\tfinal\ttone\troman\temc-entry\n")
for (let [c, vs] of Object.entries(yue))
  for (const v of vs)
    fs.appendFileSync(path, `${c}\t${v.join("\t")}\n`);

fs.writeFileSync("yue.json", JSON.stringify(yue));

const fromString = s =>
  [...s].map(c =>
    c in yue
      ? yue[c].map(xs => show.combining(...xs.slice(0, 3)) + (xs[4] ? "" : "!"))
      : c
  );

const s = process.argv[2] || "君子聖哲";
for (const x of fromString(s))
  console.log(x);
