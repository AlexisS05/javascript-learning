'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
			<div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
			<div class="movements__value">${mov}</div>
		</div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splic(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
// MUTATES THE ORIGINAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
// DOESN"T MUTATE THE ORIGINAL ARRAY
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

//////////////////////////////////
/// The new at Method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('alazy'.at(0));
console.log('alazy'.at(-1));

console.log('Anime'.at(1));
console.log('I am a gamer'.at(7));
*/

/*
////////////////////////////////////
/// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOR EACH -----');
// The Arguments order matter that are passed in the callback function. forEach(function(element, index, entireArray));
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

const wweSuperstars = [
  'Roman Reigns',
  'Bianca Belair',
  'Cody Rhodes',
  'Seth Rollins',
  'Brock Lesnar',
];

const aewSuperstars = [
  'Jon Moxley',
  'Toni Storm',
  'MJF',
  'Orange Cassidy',
  'Kenny Omega',
];

wweSuperstars.forEach(function (superstar) {
  if (superstar === wweSuperstars.at(0)) {
    console.log(
      `${superstar} is the current WWE Undisputed Universal Heavyweight Champion`
    );
  } else if (superstar === wweSuperstars.at(1)) {
    console.log(`${superstar} is the current RAW Woman's Champion`);
  } else {
    console.log(`The rest of the WWE Superstars: ${superstar}`);
  }
});

aewSuperstars.forEach(superstar => {
  if (superstar === aewSuperstars.at(0)) {
    console.log(`${superstar} is the current AEW World Champion`);
  } else if (superstar === aewSuperstars.at(1)) {
    console.log(`${superstar} is the current AEW Woman's Champion`);
  } else {
    console.log(`The rest of the AEW Superstars: ${superstar}`);
  }
});

*/

/*
//////////////////////////////////
/// forEach With Maps and Sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// key is repeated to the value.
// Basically uneccessary.
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

/*
/// Coding Challenge #1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (arr, arr2) {
  const arr3 = arr.concat();
  arr3.shift();
  // console.log(arr3);
  arr3.pop();
  arr3.pop();
  // console.log(arr3);
  const newArr = [...arr3, ...arr2];
  // console.log(newArr);

  for (const [i, dogAge] of newArr.entries()) {
    const age = dogAge >= 3 ? 'is an adult' : 'is sitll a puppy 🐶';
    console.log(`Dog number ${i + 1}  ${age}`);
  }

  // newArr.forEach(dogAge => {
  //   const age = dogAge >= 3 ? 'is an adult' : 'is sitll a puppy 🐶';
  //   console.log(`Dog number ${dogAge} ${age}`);
  // });
};

checkDogs(dogsJulia, dogsKate);
console.log('-------------------------------');
checkDogs(dogsJulia2, dogsKate2);
*/

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

const movementsUSDArrow = movements.map(mov => mov * euroToUsd);
console.log(movementsUSDArrow);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
