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

//////////////////////////////////////
// My Attempt at Understanding Calls /
//////////////////////////////////////

const wwe = {
  companyName: 'World Wrestling Entertainment',
  code: 'WWE',
  ceo: 'Stephanie McMahon & Nick Khan',
  superstars: [],
  postMessage(name, age) {
    console.log(
      `${name} has been hired by ${this.companyName} short version is ${this.code} and ${this.ceo} welcomes them to the team. `
    );
    this.superstars.push({ Superstar: name, age });
  },
};

// wwe.postMessage('Stephanie McMahon & Nick Khan');

const aew = {
  companyName: 'All Elite Wrestling',
  code: 'AEW',
  ceo: 'Tony Khan',
  superstars: [],
};

const superstarHire = wwe.postMessage;

superstarHire.call(aew, 'Jon Moxley', 35);
superstarHire.call(aew, 'MJF', 26);
superstarHire.call(wwe, 'Roman Reigns', 39);
superstarHire.call(wwe, 'Cody Rhodes', 37);
superstarHire.call(wwe, 'Seth Rollins', 38);

const impact = {
  companyName: 'Impact Wrestling',
  code: 'IMPACT',
  ceo: 'Jason Brown',
  superstars: [],
};

const njpw = {
  companyName: 'New Japan Pro Wrestling',
  code: 'NJPW',
  ceo: 'Takami Ohbari',
  superstars: [],
};

superstarHire.call(impact, 'Bobby Fish', 50);
superstarHire.call(njpw, 'Kazuchika Okada', 35);
superstarHire.call(wwe, 'Bianca Belair', 33);
console.log(wwe);
console.log(aew);
console.log(impact);
console.log(njpw);

const superstarData = ['Bayley', 30];
superstarHire.apply(wwe, superstarData);
console.log(wwe);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Alazy Sanchez');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Alazy');
greeterHey('Steven');

greet('Hello')('Ash');

const greet2 = greet2 => {
  return name => {
    console.log(`${greet2} ${name}`);
  };
};

const greeterHello = greet2('Hello');
greeterHello('Alazy');
greeterHello('Bob');

// Returning a Function
// Tax Rate
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
    // console.log(`${rate} ${value} ${total}`);
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n\ ${this.options.join('\n')}`)
    );
    console.log(answer);
    this.answers[answer]++;
    console.log(poll.answers);
  },
};
poll.registerNewAnswer();
