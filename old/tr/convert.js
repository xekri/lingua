const xss = [
	["ı", "í"],
	["i", "ì"],
	["a", "á"],
	["e", "à"],
	["o", "ó"],
	["ö", "ò"],
	["u", "ú"],
	["ü", "ù"],
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
		.replace(/[a-zçşğàáìíòóùú']+/gi, word => {
			let r = "";
			let state = 0;
			for (const c of word) {
				const stateNew =
					/[áíóú]/i.test(c) ? 0 :
						/[àìòù]/i.test(c) ? 1 :
							state;

				if (state == stateNew)
					r += replaceLowerAndUpperWithTable(c, [
						["[áà]", "a"],
						["[óò]", "o"],
						["[íì]", "i"],
						["[úù]", "u"],
					]);
				else {
					r += c;
					state = stateNew;
				}
			}
			return r;
		});