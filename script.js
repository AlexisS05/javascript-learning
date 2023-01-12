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

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();

////////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

////////////////////////////////////////////
// Setters and Getters
/*
const account = {
  owner: 'alazy',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

////////////////////////////////////////////
// Coding Challenge #2
class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.name} is going at ${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
  }

  get speedUS() {
    return `(${this.speed / 1.6}) mi/h`;
  }

  set speedUS(speed) {
    return `(${(this.speed = speed * 1.6)}) km/h`;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

/////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//////////////////////////////////////////
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

////////////////////////////////////////////
// Coding Challenge #3
/*
const Car = function (name, speed) {
  this.make = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${(this.speed += 10)} km/h `);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
};

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h and ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
*/
