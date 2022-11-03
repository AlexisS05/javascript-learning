'use strict';

/*
///////////////////////////////////////
//// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
//////////////////////////////////////
//// How Passing Arguments Works: Value Vs Reference

const flight = 'LH234';

const alazy = {
  name: 'Alazy',
  passport: 23664891893212,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23664891893212) {
    // alert('Checked in');
  } else {
    // alert('Wrong passport');
  }
};

checkIn(flight, alazy);
console.log(flight);
console.log(alazy);

// Is the same as doing...
const flightNum = flight;
const passenger = alazy;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(alazy);
checkIn(flight, alazy);
*/

/*/////////////////////////////
//////// CAlLBACKS/////////////
/////////////////////////////*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const upperFirstLetter = function (str) {
  const [first, second, third] = str.split(' ');
  return [
    first[0].toUpperCase() + first.slice(1),
    second[0].toUpperCase() + second.slice(1),
    third[0].toUpperCase() + third.slice(1),
  ].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('anime is cool', upperFirstLetter);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
*/

// document.body.addEventListener('click', high5);

// ['WWE', 'AEW', 'IMPACT!'].forEach(high5);

// function firstAction(callback, message, anotherCallback) {
//   console.log(message);
//   setTimeout(callback, 2000);
//   anotherCallback();
// }

// function secondAction(message) {
//   console.log(message);
// }

// function thirdAction() {
//   console.log('Im the third action');
// }

// setTimeout(
//   () =>
//     firstAction(
//       () => secondAction('Im second action'),
//       'Im the first action',
//       thirdAction
//     ),
//   5000
// );

// function callWWE(callback, message, anotherCallback) {
//   console.log(message);
//   setTimeout(callback, 3000);
//   anotherCallback();
// }

// function callFunction(callback) {
//   console.log(callback);
// }

// function callAEW() {
//   console.log('I am AEW');
// }

// setTimeout(
//   () =>
//     callWWE(
//       () => callFunction('I am called'),
//       'Called message by WWE',
//       callAEW
//     ),
//   5000
// );

/*//////////////////////////////////
//// Functions Returning Function //
//////////////////////////////////*/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Alazy');
// greeterHey('Steven');

// greet('Hello')('Ash');

// const greet2 = greet2 => {
//   return name => {
//     console.log(`${greet2} ${name}`);
//   };
// };

// const greeterHello = greet2('Hello');
// greeterHello('Alazy');
// greeterHello('Bob');

////////////////////////////////////
/////The Call and Apply method /////
////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Alazy Sanchez');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const wwe = {
  name: 'World Wrestling Entertainment',
  code: 'WWE',
  boss: 'Stephanie McMahon & Nick Khan',
  postMessage(name) {
    console.log(`${name} owns ${this.name} short version is ${this.code} `);
  },
};

wwe.postMessage('Tony Khan');
