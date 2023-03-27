'use strict'; // Replace characters in string with complements.

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function DNAStrand(dna) {
  var sequence = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
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
  return "found the needle at position ".concat(haystack.indexOf('needle'));
}

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
console.log(findNeedle(haystack_1)); //////////////////////////////////////////////////
// Return string characters to repeat
//// For-loop

function doubleChar(str) {
  var _char = '';

  for (var i = 0; i < str.length; i++) {
    _char += str[i].repeat(2);
  }

  return _char;
}

console.log(doubleChar('String')); // For of Loop

function doubleChar2(str, n) {
  var _char2 = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var j = _step.value;
      _char2 += j.repeat(n);
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

  return _char2;
}

console.log(doubleChar2('String', 2));
console.log(doubleChar2('WWE', 2)); /////////////////////////////////////////////////
// Return the century by year

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89)); ////////////////////////////////////////////////
// Isogram

function isIsogram(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; ++i) {
    for (var j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba')); ////////////////////////////////////////
// Greeting. if name equal owner its boss otherwise guest

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel')); //////////////////////////////////////////
// Find the average

function findAverage(array) {
  if (array.length === 0) return 0;
  var sum = array.reduce(function (arr, cur) {
    return arr + cur;
  }, 0);
  return sum / array.length;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([])); /////////////////////////////////////////
// String to Array

function stringToArray(string) {
  return string.split(' ');
}

console.log(stringToArray('Robin Singh'));
console.log(stringToArray('World Wrestling Entertainment')); /////////////////////////////////////////
// Find the third angle

var otherAngle = function otherAngle(a, b) {
  return 180 - (a + b);
};

console.log(otherAngle(30, 60)); // 90

console.log(otherAngle(60, 60)); // 60

console.log(otherAngle(43, 78)); // 59

console.log(otherAngle(10, 20)); // 150
////////////////////////////////////////////
// Is this a Triangle?

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;else return false;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2)); ///////////////////////////////////////////
// Replace letters in string. Two ways

function disemvowel(str) {
  var sequence = {
    a: '',
    i: '',
    e: '',
    o: '',
    u: '',
    A: '',
    I: '',
    E: '',
    O: '',
    U: ''
  };
  return str.replace(/a|i|e|o|u|A|I|E|O|U/g, function (matched) {
    return sequence[matched];
  });
}

function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL'));
console.log(disemvowel2('This website is for losers LOL')); ///////////////////////////////////////////
// Descending the numbers

function descendingOrder(n) {
  var numStr = n.toString().split('').sort().reverse().join('');
  return Number(numStr);
}

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(15));
console.log(descendingOrder(123456789)); /////////////////////////////////////////
// Growth of a population

function nbYear(p0, percent, aug, p) {
  var years = 0;
  var sum = 0;
  var percentage = percent / 100;

  while (sum < p) {
    sum = Math.floor(p0 + p0 * percentage + aug);
    p0 = sum;
    years++;
  }

  return years;
}

console.log(nbYear(1500, 5, 100, 5000)); ///////////////////////////////////////////
// Shortest Word

function findShort(s) {
  var numStr = s.split(' ');
  var shortest = numStr.reduce(function (acc, cur) {
    return cur.length < acc.length ? cur : acc;
  }, numStr[1]);
  return shortest.length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); /////////////////////////////////////////
// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  var years = 0;

  while (principal < desired) {
    var gains = principal * interest - principal * interest * tax;
    principal += gains;
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.5, 0.18, 1100)); /////////////////////////////////////////
// Opposite Number (returns an opposite number)

function opposite(number) {
  return -number;
}

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34)); ///////////////////////////////////////////
// Reverse words

function reverseWords2(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords2('The quick brown fox jumps over the lazy dog.'));
reverseWords2('apple');
reverseWords2('a b c d');
reverseWords2('double spaced words'); /////////////////////////////////////////////
// Powers of 2

function powersOfTwo(n) {
  var arr = [];

  for (var i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }

  return arr;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4)); ///////////////////////////////////////////
// Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  var twiceAge = sonYearsOld * 2;
  var dadAgeSum = 0;

  if (dadYearsOld >= twiceAge || twiceAge > dadYearsOld) {
    dadAgeSum += dadYearsOld - twiceAge;
  }

  return Math.abs(dadAgeSum);
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21)); /////////////////////////////////////////
// Destructuring arrays

/* Data used in exercises */

var books = [{
  title: 'The Lord of the Rings',
  publicationDate: '1954-07-29',
  author: 'J. R. R. Tolkien',
  genres: ['fantasy', 'high-fantasy', 'adventure'],
  filmAdaptation: true,
  otherLanguagesTitle: {
    spanish: 'El señor de los anillos',
    chinese: '魔戒',
    french: 'Le Seigneur des anneaux'
  }
}, {
  title: 'The Cyberiad',
  publicationDate: 1965,
  author: 'Stanislaw Lem',
  genres: ['science fiction'],
  otherLanguagesTitle: {
    polish: 'Cyberiada',
    spanish: 'Ciberiada',
    french: 'Cybériade'
  }
}, {
  title: 'Dune',
  publicationDate: 1965,
  author: 'Frank Herbert',
  genres: ['science fiction', 'novel', 'adventure'],
  filmAdaptation: true,
  otherLanguagesTitle: {}
}, {
  title: "Harry Potter and the Philosopher's Stone",
  publicationDate: '1997-06-26',
  author: 'J. K. Rowling',
  genres: ['fantasy', 'adventure'],
  filmAdaptation: true,
  otherLanguagesTitle: {
    spanish: 'Harry Potter y la piedra filosofal',
    korean: '해리 포터와 마법사의 돌',
    bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
    portuguese: 'Harry Potter e a Pedra Filosofal'
  }
}, {
  title: 'A Game of Thrones',
  publicationDate: '1996-08-01',
  author: 'George R. R. Martin',
  genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
  filmAdaptation: true,
  otherLanguagesTitle: {
    korean: '왕좌의 게임',
    polish: 'Gra o tron',
    portuguese: 'A Guerra dos Tronos',
    spanish: 'Juego de tronos'
  }
}];
/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

var getBooksByGenre = function getBooksByGenre(genre) {
  return books.filter(function (book) {
    return book.genres.includes(genre);
  });
};

var getBooksAsArrays = function getBooksAsArrays() {
  return books.map(function (book) {
    return Object.entries(book);
  });
};

var getBookAuthors = function getBookAuthors() {
  return books.map(function (book) {
    return book.author;
  });
};
/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
      Leave the rest of the books unused. */
// const [a, b, c, d] = books;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */
// const [, second, third] = books;
// console.log(second);
// console.log(third);

/* D) Are you ready for some hard-core destructuring? 😄
      The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
      Now, you have an array of arrays of arrays.
      Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */
// getBooksAsArrays();
// const [, [[key, title]]] = getBooksAsArrays();
// console.log(title);

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
      Use the 'let' statement because the 'author' variable may change later. */
// let [{ author }] = books;
// console.log(author);

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */
// let [, { title: bookTitle }] = books;
// console.log(bookTitle);

/* C) The book objects aren't consistent in their form.
      For example, the second book doesn't have the 'filmAdaptation' property.
      Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */


var _books$ = books[1],
    title = _books$.title,
    author = _books$.author,
    _books$$hasFilmAdapta = _books$.hasFilmAdaptation,
    filmAdaptation = _books$$hasFilmAdapta === void 0 ? false : _books$$hasFilmAdapta;
console.log(filmAdaptation);
/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
      Destructure the author of the third book into existing variable called 'author'. */
// [, , { author }] = books;
// console.log(author);

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
      Reassign the 'authors' variable below so that it contains both — already existing authors,
      and authors returned from the getBookAuthors() function. Use the spread syntax. */
// let authors = [...getBookAuthors()];

/* B) The console.log() method can take multiple arguments and log them to the console.
      First, log the 'authors' array as it is (as one argument).
      Second, log the elements of the 'authors' array, but this time use the spread syntax.
      Compare the outputs. */
// Logs array
// console.log(authors);
// // Logs array but its a big string
// console.log(...authors);

/* C) The spread syntax can be used with other iterables, for example, strings.
      Create a new variable called 'firstNameArray', and spread the 'firstName' string
      so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */

var firstName = 'John';

var firstNameArray = _toConsumableArray(firstName);

console.log(firstNameArray);
/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
      and assign an object to it. This object should have all the properties of the second book from the 'books' array,
      plus the missing 'filmAdaptation' property set to false. */

var cyberiad = [].concat(books);
cyberiad[1].filmAdaptation = false;
console.log(cyberiad[1]);
/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  4) REST PATTERN AND PARAMETERS             *
 *  ********************************************
 */

/* A) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */

console.log(getBooksByGenre('fantasy'));

var _getBooksByGenre = getBooksByGenre('fantasy'),
    _getBooksByGenre2 = _toArray(_getBooksByGenre),
    theLordOfTheRings = _getBooksByGenre2[0],
    otherFantasyBooks = _getBooksByGenre2.slice(1);

console.log(theLordOfTheRings);
console.log(otherFantasyBooks);
/* B) This time you'll write a function utilizing the power of rest parameters.
      This function named as list() should output a list with a title to the console.
      The first argument it takes is the "title" of the list (string),
      the rest of arguments are list "items" (as many as you want) that will be displayed under the title.
      Example:
      list('My favorite books', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');
      Output:
      My favorite books:          <-- title
      1) Brave New World          <-- list item
      2) The Great Gatsby         <-- list item
      3) Pride and Prejudice      <-- list item
      ...
     */

var list = function list(title) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  var item = items.map(function (x, i) {
    return "".concat(i + 1, ") ").concat(x);
  });
  console.log("".concat(title, "\n").concat(item.join('\n')));
};

list('My favorite books:', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');

var favoriteAnime = function favoriteAnime(title) {
  for (var _len2 = arguments.length, items = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    items[_key2 - 1] = arguments[_key2];
  }

  var item = items.map(function (anime, i) {
    return "".concat(i + 1, ") ").concat(anime);
  });
  console.log("".concat(title, "\n").concat(item.join('\n')));
};

favoriteAnime('My favorite anime:', 'Attack On Titan', 'My Hero Academia', 'My Dress Up Darling'); // const scrub = (...property) => {
// 	const output = property.map((x, i) => `${i + 1} ${x}`);
// 	console.log(output.join('\n'));
// };
// scrub('Loves McDonalds', 'Rigs Showdown', 'Carries', 'And a bitch');

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

/*
 *  ********************************************
 *  5) SHORT CIRCUITING (&& and ||)            *
 *  ********************************************
 */

/* A) Each book has the 'otherLanguagesTitle' property, which stores an object containing the language as a key,
      and the title of the book in that language as a value.
      Example 'otherLanguagesTitle' property:
      otherLanguagesTitle: {
        spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux'
      }
      Write a function called 'getTitleInSpanish' that takes a 'book' object as an argument,
      and returns a title in Spanish or a string "No data available" if there is no title in Spanish.
      Using the 'if' statement or the ternary operator is not allowed. */
// const getTitleInSpanish = function (book) {
// 	const getBook = book.map(
// 		(x) => x.otherLanguagesTitle?.spanish || 'No data available'
// 	);
// 	console.log(getBook);
// };
// getTitleInSpanish(books);

/* B) Loop over the 'books' array, and for each book check if it has the title in Spanish and Korean.
      If it's true, log a string "<title> by <author> has title in Spanish and Korean" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
// const checkSpaKor = function () {
// 	books.forEach((book) => {
// 		return (
// 			book.otherLanguagesTitle.spanish &&
// 			book.otherLanguagesTitle.korean &&
// 			console.log(
// 				`${book.title} by ${book.author} has translations in Spanish and Korean `
// 			)
// 		);
// 	});
// };
// checkSpaKor();

/* C) Loop over the 'books' array, and for each book check if it has the title in Portuguese or Spanish, but not in both.
      If it's true, log a string "<title> by <author> has title in Portuguese or Spanish, but not in both" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */

books.forEach(function (book) {
  return (book.otherLanguagesTitle.spanish || book.otherLanguagesTitle.portuguese) && console.log("".concat(book.title, " by ").concat(book.author, " has translations in Spanish or Portuguese"));
});
/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */

var numbers = [33, 2, 100, 8];
numbers.sort();
console.log(numbers[1]);
console.log(numbers);
var isTrue = true == [];
var isFalse = true == ![];
console.log(isTrue);
console.log(isFalse);
console.log(_typeof(_typeof(1))); // Hoisting

nonHoisted(); // hoistedFunction();

var hoistedFunction = function hoistedFunction() {
  console.log('Test');
};

function nonHoisted() {
  console.log('test2');
}

function openOrSenior(data) {
  var output = [];
  data.map(function (el) {
    return el[0] >= 55 && el[1] > 7 ? output.push('Senior') : output.push('Open');
  });
  console.log(output);
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);
openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]);
openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]);

function openOrSenior2(data) {
  data.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        age = _ref2[0],
        handicap = _ref2[1];

    return age[0] >= 55 && handicap[1] > 7 ? console.log('Senior') : console.log('Open');
  });
}

openOrSenior2([[45, 12], [55, 21], [19, -2], [104, 20]]);

function highAndLow(numbers) {
  var split = numbers.split(' ');
  var num = split.map(function (num) {
    return +num;
  });
  var max = Math.max.apply(Math, _toConsumableArray(num));
  var min = Math.min.apply(Math, _toConsumableArray(num));
  var both = "".concat(max, " ").concat(min);
  console.log(both);
}

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4');