'use strict';
//////////////////////////////////////////
// Constructor Function and the new Operator
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const alazy = new Person('Alazy', 1999);
console.log(alazy);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatially returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(alazy instanceof Person);

console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

alazy.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(alazy.__proto__);
console.log(alazy.__proto__ === Person.prototype);

const wwe = '';

console.log(Person.prototype.isPrototypeOf(alazy));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(wwe));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(alazy.species, matilda.species);

console.log(alazy.hasOwnProperty('firstName'));
console.log(alazy.hasOwnProperty('species'));

console.log(alazy.__proto__);
// Object.prototype (top of prototype chain)
console.log(alazy.__proto__.__proto__);
console.log(alazy.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
//////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
const Car = function (name, speed) {
  this.make = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${(this.speed += 10)} km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
*/

////////////////////////////////////////////
///// ES6 Classes

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
