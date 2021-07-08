document.addEventListener("DOMContentLoaded", () => {
	const [ta0, ta1] = document.getElementsByTagName("textarea");
	const f0 = () => {
		ta1.value = convert0(ta0.value);
	};

	ta0.addEventListener("input", f0);
	f0();

	for (const button of document.getElementsByTagName("button"))
		button.addEventListener("click", () => {
			ta0.value += button.innerHTML;
			f0();
		});

	for (const e of document.querySelectorAll(".bn, .bn-table td"))
		e.innerHTML = `${e.innerHTML} <span class="bn-roman">${convert0(e.innerHTML)}</span>`;
});

const maybeA = "<<<maybe a>>>";
const convert0 = s =>
	s
		.normalize("NFC")
		.replace(/য়/g, "য়")

		.replace(/র/g, "ৰ")

		.replace(/ক/g, "k" + maybeA)
		.replace(/খ/g, "kh" + maybeA)
		.replace(/গ/g, "c" + maybeA)
		.replace(/ঘ/g, "ch" + maybeA)
		.replace(/ঙ/g, "g" + maybeA)
		.replace(/হ/g, "h" + maybeA)

		.replace(/চ/g, "ǩ" + maybeA)
		.replace(/ছ/g, "ǩh" + maybeA)
		.replace(/জ/g, "č" + maybeA)
		.replace(/ঝ/g, "čh" + maybeA)
		.replace(/ঞ/g, "ǧ" + maybeA)
		.replace(/য়/g, "y" + maybeA) // nukta
		.replace(/য/g, "j" + maybeA)
		.replace(/শ/g, "x̌" + maybeA)

		.replace(/ট/g, "ť" + maybeA)
		.replace(/ঠ/g, "ťh" + maybeA)
		.replace(/ড়/g, "ɍ" + maybeA) // nukta
		.replace(/ড/g, "ď" + maybeA)
		.replace(/ঢ়/g, "ɍh" + maybeA) // nukta
		.replace(/ঢ/g, "ďh" + maybeA)
		.replace(/ণ/g, "ň" + maybeA)
		.replace(/ৰ/g, "r" + maybeA)
		.replace(/ষ/g, "š" + maybeA)

		.replace(/ত/g, "t" + maybeA)
		.replace(/থ/g, "th" + maybeA)
		.replace(/দ/g, "d" + maybeA)
		.replace(/ধ/g, "dh" + maybeA)
		.replace(/ন/g, "n" + maybeA)
		.replace(/ল/g, "l" + maybeA)
		.replace(/স/g, "s" + maybeA)

		.replace(/প/g, "p" + maybeA)
		.replace(/ফ/g, "ph" + maybeA)
		.replace(/ব/g, "b" + maybeA)
		.replace(/ভ/g, "bh" + maybeA)
		.replace(/ম/g, "m" + maybeA)
		.replace(/ৱ/g, "v" + maybeA)

		.replace(/অ/g, "a")
		.replace(/আ/g, "ā")
		.replace(/ই/g, "i")
		.replace(/ঈ/g, "ī")
		.replace(/ঋ/g, "ṛ")
		.replace(/ৠ/g, "ṝ")
		.replace(/ঌ/g, "ḷ")
		.replace(/ৡ/g, "ḹ")
		.replace(/উ/g, "u")
		.replace(/ঊ/g, "ū")
		.replace(/এ/g, "e")
		.replace(/ঐ/g, "ai")
		.replace(/ও/g, "o")
		.replace(/ঔ/g, "au")

		.replace(new RegExp(maybeA + "?া", "g"), "ā")
		.replace(new RegExp(maybeA + "?ি", "g"), "i")
		.replace(new RegExp(maybeA + "?ী", "g"), "ī")
		.replace(new RegExp(maybeA + "?ৃ", "g"), "ṛ")
		.replace(new RegExp(maybeA + "?ৄ", "g"), "ṝ")
		.replace(new RegExp(maybeA + "?ৢ", "g"), "ḷ")
		.replace(new RegExp(maybeA + "?ৣ", "g"), "ḹ")
		.replace(new RegExp(maybeA + "?ু", "g"), "u")
		.replace(new RegExp(maybeA + "?ূ", "g"), "ū")
		.replace(new RegExp(maybeA + "?ে", "g"), "e")
		.replace(new RegExp(maybeA + "?ৈ", "g"), "ai")
		.replace(new RegExp(maybeA + "?ো", "g"), "o")
		.replace(new RegExp(maybeA + "?ৌ", "g"), "au")
		.replace(new RegExp(maybeA + "\u09CD", "g"), "")
		.replace(new RegExp(maybeA, "g"), "a")


		.replace(/ৎ/g, "ṫ")
		.replace(/ঽ/g, "~")

		.replace(/ঁ/g, "ṅ")
		.replace(/ং/g, "ġ")
		.replace(/ঃ/g, "ḣ")

		.replace(/ঽ/g, "'")
		.replace(/।/g, ".")

		.replace(/০/g, "0")
		.replace(/১/g, "1")
		.replace(/২/g, "2")
		.replace(/৩/g, "3")
		.replace(/৪/g, "4")
		.replace(/৫/g, "5")
		.replace(/৬/g, "6")
		.replace(/৭/g, "7")
		.replace(/৮/g, "8")
		.replace(/৯/g, "9")

		.normalize("NFC")

document.addEventListener("DOMContentLoaded", () => {
	for (const tr of document.querySelectorAll("table.vocabulary tr")) {
		const tdOld = tr.querySelector("td:first-of-type");
		const tdNew = document.createElement("td")
		tdNew.innerHTML = convert0(tdOld.innerHTML);
		tr.insertBefore(tdNew, tdOld.nextSibling);
	}
});
