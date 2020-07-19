"use strict";

var nuOrtho = function nuOrtho(s, cyr) {
  var r = s.toLowerCase().replace(/ą/g, "o\u0303").replace(/ę/g, "e\u0303").replace(/ó/g, "o\u0304").replace(/ch/g, "x").replace(/h/g, "x").replace(/l/g, "lj").replace(/ł/g, "l").replace(/rz/g, "rj").replace(/dż/g, "d\u0307").replace(/ć|ci(?=[yaueo])/g, "tj").replace(/ci/g, "tji").replace(/dź|dzi(?=[yaueo])/g, "dj").replace(/ʒi/g, "dji").replace(/cz/g, "c\u0307").replace(/ż/g, "g\u0307").replace(/sz/g, "x\u0307").normalize("NFD").replace(/(?<=[szn])\u0301/g, "j").replace(/c(?!\u0307)/g, "c\u0308").replace(/k/g, "c").replace(/dz/g, "g\u0308").replace(/(?<=[pbfwmtdsznlrcgx\u0308])i(?=[yaueo])/g, "j").replace(/(?<=[pbfwmtdsznlrcgx\u0308])i/g, "ji").replace(/y/g, "i");
  if (cyr) r = r.replace(/e\u0303/g, "ѧ").replace(/o\u0303/g, "ѫ").replace(/j/g, "ь").replace(/i/g, "и").replace(/e/g, "є").replace(/a/g, "а").replace(/o/g, "о").replace(/u/g, "у").replace(/d\u0307/g, "җ").replace(/c\u0307/g, "ч").replace(/g\u0307/g, "ж").replace(/x\u0307/g, "ш").replace(/c\u0308/g, "ц").replace(/g\u0308/g, "ѕ").replace(/t/g, "т").replace(/d/g, "д").replace(/s/g, "с").replace(/z/g, "з").replace(/n/g, "н").replace(/l/g, "л").replace(/r/g, "р").replace(/p/g, "п").replace(/b/g, "б").replace(/f/g, "ф").replace(/w/g, "в").replace(/m/g, "м").replace(/c/g, "к").replace(/g/g, "г").replace(/x/g, "х").replace(/h/g, "х").replace(/ьа/g, "я").replace(/ьу/g, "ю").replace(/ьє/g, "ѥ").replace(/ьо/g, "е").replace(/ьѧ/g, "ѩ").replace(/ьѫ/g, "ѭ");else r = r.replace(/i/g, "ı") //.replace(/y/g, "ı")
  .replace(/j/g, "ȷ");
  return r.normalize("NFC");
};

var update = function update() {
  document.getElementById("sink-lat").value = nuOrtho(document.getElementById("source").value, false);
  document.getElementById("sink-cyr").value = nuOrtho(document.getElementById("source").value, true);
  document.getElementById("tweet").setAttribute("href", "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(document.getElementById("source").value + "\n" + document.getElementById("sink-lat").value + "\n" + document.getElementById("sink-cyr").value)));
};

document.addEventListener("DOMContentLoaded", function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll(".nu td")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var td = _step.value;
      if (/.*?\{.*\}.*?/.test(td.innerHTML)) td.innerHTML = td.innerHTML.replace(/^\{(.+)\}$/g, function (match, p1) {
        return "<span class=\"as-is\">".concat(p1, "</span>");
      });else td.innerHTML = nuOrtho(td.innerHTML, false);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById("source").addEventListener("input", update);
  document.getElementsByTagName("input")[0].addEventListener("input", update);
  update();
  document.querySelectorAll(".add-new tr").forEach(function (tr) {
    var td = tr.lastElementChild;

    if (td.tagName == "TD") {
      for (var _i = 0, _arr = [false, true]; _i < _arr.length; _i++) {
        var cyr = _arr[_i];
        var tdNu = td.cloneNode(true);
        tdNu.innerHTML = nuOrtho(td.innerHTML, cyr);
        tr.appendChild(tdNu);
      }
    }
  });
});