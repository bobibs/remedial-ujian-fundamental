// Soal Nomor 1

// Soal Nomor 2
segitigaAngka = tinggi => {
	let output = '';
	let angka = 1;

	for (a = 0; a < tinggi; a++) {
		for (b = tinggi; b > a; b--) {
			output += ' ';
		}
		for (c = 0; c <= a; c++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		for (d = 1; d <= a; d++) {
			if (angka % 2 === 0) {
				output += ' ';
			} else {
				output += `${angka}`;
			}
			angka++;
		}
		if (a < tinggi - 1) {
			output += '\n';
		}
		angka += 1;
	}
	return output;
};

console.log(segitigaAngka(5));

// Soal Nomor 3
jualTiket = params => {
	let harga = 25;
	let kas = 0;

	for (i = 0; i < params.length; i++) {
		if (params[i] - harga <= kas) {
			kas += params[i] - kas;
			console.log('Terimakasih telah membeli tiket di Vasya');
		} else {
			console.log(`Maaf, Vasya tidak punya kembalian untuk uang ${params[i]}`);
		}
	}
};

// console.log(jualTiket([25, 100]));
