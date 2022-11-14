// CodeWars
'use strict';

// Boolean to String
function booleanToString(b) {
  return b + '';
}
console.log(booleanToString(true));
console.log(booleanToString(false));

// Removing elements
function removeEveryOther(arr) {
  let res = arr.filter(function (v, i) {
    return i % 2 === 0;
  });
  return res;
}

console.log(
  removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'WWE', 'Anime'])
);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6]));

// Practice with Remainders
15 % 2; // = 1
45 % 6; // = 3
