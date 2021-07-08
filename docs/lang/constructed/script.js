document.addEventListener("DOMContentLoaded", () => {
  if (false)
    for (const tr of document.querySelectorAll("#vocabulary tr")) {
      const td = tr.children[1];
      td.textContent = td.textContent
        .normalize("NFC")

        .replace(/c/g, "č")
        .replace(/ṭ/g, "c")
        .replace(/j/g, "ǯ")
        .replace(/ḍ/g, "ʒ")
        .replace(/[ṅñ]/g, "n")
        .replace(/y/g, "j")
        .replace(/ś/g, "š")
        .replace(/s/g, "þ")
        .replace(/ṣ/g, "s")

        .replace(/(?<=[kčctp])h/g, "x")

        .replace(/ai/g, "ē")
        .replace(/au/g, "ō")

        .replace(/a/g, "a")
        .replace(/ā/g, "ä")
        .replace(/ī/g, "ü")
        .replace(/ē/g, "ö")
        .replace(/u/g, "ï")
        .replace(/ū/g, "u")
        .replace(/o/g, "ë")
        .replace(/ō/g, "o")
        .replace(/ṛ/g, "r")
        .replace(/ḷ/g, "l")
        .replace(/ṝ/g, "rr")
        .replace(/ḹ/g, "ll")

        .replace(/ṁ/g, "n")
        .replace(/ḥ/g, "x");
    }

});

const convertHan = s => {
  const [initial, final, tone] = [...s];
  return {
    幫: "p",
    滂: "px",
    並: "b",
    明: "m",

    端: "t",
    透: "tx",
    定: "d",
    泥: "n",
    來: "l",

    知: "č",
    徹: "čx",
    澄: "ǯ",
    娘: "r",

    精: "c",
    清: "cx",
    從: "ʒ",
    心: "þ",
    邪: "ð",

    莊: "č",
    初: "čx",
    崇: "ǯ",
    生: "s",
    俟: "z",

    章: "t",
    昌: "tx",
    常: "d",
    書: "š",
    船: "ž",
    日: "n",

    見: "k",
    溪: "kx",
    群: "g",
    疑: "ŋ",

    曉: "x",
    匣: "h",

    影: "q",
    云: "",
    以: "",
  }[initial] + {
    東: "",
    東: "",
    冬: "",
    鍾: "",
    江: "",
    支: "",
    脂: "",
    之: "",
    微: "",
    微: "",
    魚: "",
    虞: "",
    模: "",
    齊: "",
    祭: "",
    泰: "",
    佳: "",
    皆: "",
    夬: "",
    灰: "",
    咍: "",
    廢: "",
    真: "",
    諄: "",
    臻: "",
    文: "",
    欣: "",
    元: "",
    魂: "",
    痕: "",
    寒: "",
    桓: "",
    刪: "",
    山: "",
    先: "",
    仙: "",
    蕭: "",
    宵: "",
    餚: "",
    豪: "",
    歌: "",
    戈: "",
    麻: "",
    陽: "",
    唐: "",
    庚: "",
    耕: "",
    清: "",
    青: "",
    蒸: "",
    登: "",
    尤: "",
    侯: "",
    幽: "",
    侵: "",
    覃: "",
    談: "",
    鹽: "",
    添: "",
    咸: "",
    銜: "",
    嚴: "",
    凡: "",
  }[final];
}