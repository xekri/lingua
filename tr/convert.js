const xss = [
	["i", "ǐ"],
	["ı", "î"],
	["a", "â"],
	["e", "ǎ"],
	["o", "ô"],
	["ö", "ǒ"],
	["u", "û"],
	["ü", "ǔ"],
];

const replaceLowerAndUpperWithTable = (s, xss) =>
	xss.reduce((acc, [x, y]) =>
		acc
			.replace(new RegExp(x, "g"), y)
			.replace(new RegExp(x.toUpperCase(), "g"), y.toUpperCase()),
		s);

const convert = s =>
	xss.reduce((acc, [x, y]) =>
		acc
			.replace(new RegExp(x, "g"), y)
			.replace(new RegExp(x.toLocaleUpperCase("TR"), "g"), y.toUpperCase()),
		s.normalize("NFC"))
		.replace(/[a-zçşğâôîûǎǒǐǔ']+/gi, word => {
			let r = "";
			let state = 0;
			for (const c of word) {
				const stateNew =
					/[âôîû]/i.test(c) ? 0 :
						/[ǎǒǐǔ]/i.test(c) ? 1 :
							state;

				if (state == stateNew)
					r += replaceLowerAndUpperWithTable(c, [
						["[âǎ]", "a"],
						["[ôǒ]", "o"],
						["[îǐ]", "i"],
						["[ûǔ]", "u"],
					]);
				else {
					r += c;
					state = stateNew;
				}
			}
			return r;
		});