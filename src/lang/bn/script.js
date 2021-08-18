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
		.replace(/ৰ/g, "র")

		.replace(/ক/g, "k" + maybeA)
		.replace(/খ/g, "kx" + maybeA)
		.replace(/গ/g, "c" + maybeA)
		.replace(/ঘ/g, "ch" + maybeA)
		.replace(/ঙ/g, "g" + maybeA)
		.replace(/হ/g, "h" + maybeA)

		.replace(/চ/g, "ᶄ" + maybeA)
		.replace(/ছ/g, "ᶄx" + maybeA)
		.replace(/জ/g, "ꞔ" + maybeA)
		.replace(/ঝ/g, "ꞔh" + maybeA)
		.replace(/ঞ/g, "ᶃ" + maybeA)
		.replace(/য়/g, "ȷ" + maybeA) // nukta
		.replace(/য/g, "j" + maybeA)
		.replace(/শ/g, "ᶍ" + maybeA)

		// ʐ
		.replace(/ট/g, "ʈ" + maybeA)
		.replace(/ঠ/g, "ʈx" + maybeA)
		.replace(/ড়/g, "ḍ" + maybeA) // nukta
		.replace(/ড/g, "ɖ" + maybeA)
		.replace(/ঢ়/g, "ḍh" + maybeA) // nukta
		.replace(/ঢ/g, "ɖh" + maybeA)
		.replace(/ণ/g, "ɳ" + maybeA)
		.replace(/র/g, "r" + maybeA)
		.replace(/ষ/g, "ʂ" + maybeA)

		.replace(/ত/g, "t" + maybeA)
		.replace(/থ/g, "tx" + maybeA)
		.replace(/দ/g, "d" + maybeA)
		.replace(/ধ/g, "dh" + maybeA)
		.replace(/ন/g, "n" + maybeA)
		.replace(/ল/g, "l" + maybeA)
		.replace(/স/g, "s" + maybeA)

		.replace(/প/g, "p" + maybeA)
		.replace(/ফ/g, "px" + maybeA)
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


		.replace(/ৎ/g, "t")
		.replace(/ঽ/g, "~")

		.replace(/ঁ/g, "\u0328")
		.replace(/ং/g, "ṇ")
		.replace(/ঃ/g, "x")

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
