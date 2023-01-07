'use strict';

// Replace characters in string with complements.
function DNAStrand(dna) {
	let sequence = {
		A: 'T',
		T: 'A',
		G: 'C',
		C: 'G',
	};

	return dna.replace(/A|T|G|C/g, function (matched) {
		return sequence[matched];
	});
}

console.log(DNAStrand('AAAA')); /// TTTT
console.log(DNAStrand('ATTGC')); /// TAACG
console.log(DNAStrand('GTAT')); /// CATA

////////////////////////////////////////////
// Find index of array

function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf('needle')}`;
}

let haystack_1 = [
	'3',
	'123124234',
	undefined,
	'needle',
	'world',
	'hay',
	2,
	'3',
	true,
	false,
];

console.log(findNeedle(haystack_1));
