const log = x => {
  console.log(x);
  return x;
};

document.addEventListener("DOMContentLoaded", () => {
  const [t0, t1] = document.getElementsByTagName("textarea");
  const onInput = () => {
    t1.value = convert(t0.value);
  };

  t0.addEventListener("input", onInput);
  onInput();
});

const convert = s =>
  [
    [/礼/g, "礼"],
    [/社/g, "社"],
    [/祈/g, "祈"],
    [/祉/g, "祉"],

    [/会/g, "會"],
    [/絵/g, "繪"],

    [/譲/g, "讓"],
    [/嬢/g, "孃"],

    [/軽/g, "輕"],
    [/径/g, "徑"],
    [/経/g, "經"],

    [/専/g, "專"],
    [/厳/g, "嚴"],
    [/権/g, "權"],
    [/価/g, "價"],
    [/国/g, "國"],
    [/並/g, "竝"],
    [/総/g, "總"],

    [/者/g, "者"],
    [/諸/g, "諸"],
    [/緒/g, "緖"],

    [/緒/g, "緖"],

    [/関/g, "關"],
    [/(?<=關西)弁|弁(?=解|護|舌|論)/g, "辯"],
    [/証/g, "證"],
    [/当/g, "當"],
    [/(?<=勘|支)弁|弁(?=償|證|當|別|明|理)/g, "辨"],
    [/(?<=花|安全)弁|弁(?=膜)/g, "瓣"],
    [/髪/g, "髮"],
    [/弁(?=髮)/g, "辮"],
    //辦
  ].reduce((acc, [x, y]) => acc.replace(x, y), s);

