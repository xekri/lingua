const xss = [
	['[ыий]', "i"],

	['э', "à"], // e
	['ү', "ù"], // u
	['ө', "ò"], // o

	['а', "á"], // a
	['у', "ú"], // ʊ
	['о', "ó"], // ɔ

	['е', "jò"],
	['ё', "jó"],
	['ю', "ju"],
	['я', "já"],

	['к', "k"],
	['г', "g"],
	['х', "h"],

	['п', "p"],
	['б', "b"],
	['м', "m"],
	['ф', "f"],
	['в', "v"],

	['т', "t"],
	['д', "d"],
	['н', "n"],
	['л', "l"],
	['р', "r"],

	['с', "s"],
	['з', "z"],
	['ц', "c"],

	['ш', "x"],
	['ж', "j"],
	['ч', "q"],

	['ъ', "'"],
	['ь', "y"],
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
			.replace(new RegExp(x.toUpperCase(), "g"), y.toUpperCase()),
		s.normalize("NFC")
	)
		.replace(/\p{L}+/gui, word => {
			let r = "";
			let state = 0;
			for (const c of word) {
				const stateNew =
					/[áóú]/i.test(c) ? 0 :
						/[àòù]/i.test(c) ? 1 :
							state;

				if (state == stateNew)
					r += replaceLowerAndUpperWithTable(c, [
						["[àá]", "a"],
						["[òó]", "o"],
						["[ùú]", "u"],
					]);
				else {
					r += c;
					state = stateNew;
				}
			}
			return r;
		});
