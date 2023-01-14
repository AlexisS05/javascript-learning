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

//////////////////////////////////////////////////
// Return string characters to repeat
//// For-loop
function doubleChar(str) {
	let char = '';
	for (let i = 0; i < str.length; i++) {
		char += str[i].repeat(2);
	}
	return char;
}

console.log(doubleChar('String'));

// For of Loop
function doubleChar2(str, n) {
	let char = '';
	for (let j of str) {
		char += j.repeat(n);
	}
	return char;
}

console.log(doubleChar2('String', 2));
console.log(doubleChar2('WWE', 2));

/////////////////////////////////////////////////
// Return the century by year
function century(year) {
	return Math.ceil(year / 100);
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));

////////////////////////////////////////////////
// Isogram

function isIsogram(str) {
	str = str.toLowerCase();
	for (let i = 0; i < str.length; ++i) {
		for (let j = i + 1; j < str.length; ++j) {
			if (str[i] === str[j]) {
				return false;
			}
		}
	}
	return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));

////////////////////////////////////////
// Greeting. if name equal owner its boss otherwise guest
function greet(name, owner) {
	return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel'));

//////////////////////////////////////////
// Find the average
function findAverage(array) {
	if (array.length === 0) return 0;
	const sum = array.reduce((arr, cur) => arr + cur, 0);
	return sum / array.length;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));

/////////////////////////////////////////
// String to Array
function stringToArray(string) {
	return string.split(' ');
}

console.log(stringToArray('Robin Singh'));
console.log(stringToArray('World Wrestling Entertainment'));

/////////////////////////////////////////
// Find the third angle
const otherAngle = (a, b) => {
	return 180 - (a + b);
};

console.log(otherAngle(30, 60)); // 90
console.log(otherAngle(60, 60)); // 60
console.log(otherAngle(43, 78)); // 59
console.log(otherAngle(10, 20)); // 150

////////////////////////////////////////////
// Is this a Triangle?
function isTriangle(a, b, c) {
	if (a + b > c && b + c > a && a + c > b) return true;
	else return false;
}
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));

///////////////////////////////////////////
// Replace letters in string. Two ways
function disemvowel(str) {
	let sequence = {
		a: '',
		i: '',
		e: '',
		o: '',
		u: '',
		A: '',
		I: '',
		E: '',
		O: '',
		U: '',
	};

	return str.replace(/a|i|e|o|u|A|I|E|O|U/g, function (matched) {
		return sequence[matched];
	});
}

function disemvowel2(str) {
	return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL'));
console.log(disemvowel2('This website is for losers LOL'));

///////////////////////////////////////////
// Descending the numbers
function descendingOrder(n) {
	let numStr = n.toString().split('').sort().reverse().join('');

	return Number(numStr);
}
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(15));
console.log(descendingOrder(123456789));

/////////////////////////////////////////
function nbYear(p0, percent, aug, p) {}
