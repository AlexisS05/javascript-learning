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

const account5 = {
  owner: 'World Wrestling Entertainment',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4, account5];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  const movSort = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movSort.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
			<div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
			<div class="movements__value">${mov}€</div>
		</div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (accs) {
  accs.balance = accs.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${accs.balance} €`;
};

// The Magic of Chaining Methods
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  // My attempt but upperCase
  accs.forEach(acc => {
    acc.upperCase = acc.owner
      .toUpperCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting.
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // MY ATTEMPT AND REALIZED WHY MY ATTEMPT IS A BAD PRACTICE
  // IN THIS SCENARIO

  // currentAccount = accounts.find(
  //   acc => acc.username === inputCloseUsername.value
  // );

  // if (currentAccount?.pin === Number(inputClosePin.value)) {
  //   console.log('Correct credentials');
  // } else {
  //   console.log('User does not exist');
  // }

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
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

/*
//////////////////////////////////
The map method

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
*/

/*
////////////////////////////////////////////////
//// The filter method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//////////////////
// My attempt on filter method.
const withdrawalFor = [];
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov);
console.log(withdrawalFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

////////////////////////////////////////
/// The reduce Method.
/*
console.log(movements);

// accumulator => SNOWBALL
// const balance = movements.reduce(function (accu, cur, i, arr) {
//   console.log(`Iteration ${i}: ${accu}`);
//   return accu + cur;
// }, 0);

const balance = movements.reduce((accu, cur) => accu + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/////////////////////////////////////
/*
// Coding Challenge #2
const calcAverageHumanAge = function (arr) {
  let humanAge;
  const dogAgeToHuman = arr.map(function (val, i) {
    if (val <= 2) {
      console.log((humanAge = val * 2));
      return humanAge;
    } else if (val > 2) console.log((humanAge = 16 + val * 4));
    return humanAge;
  });
  const FilterAge = dogAgeToHuman.filter((val, i) => {
    if (val < 18) {
      console.log(
        `${i} are the indexes/dogs that are less than 18 in human years`
      );
    } else if (val > 18) return val;
  });
  const avgAge = FilterAge.reduce((acc, val) => {
    return acc + val / FilterAge.length;
  }, 0);
  console.log(`Average Age: ${avgAge}`);
};

/// My attempt works.
/// Seeing the result in the video. I could have made my code more shorter and simpler. Still I'm happy to have completed the challenge on my own.

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
const euroToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/////////////////////////////////
// Coding Challenge #3
/*
const calcAverageHumanAge2 = arr => {
  const dogAgeToHuman = arr
    .map(val => (val <= 2 ? val * 2 : 16 + val * 4))
    .filter(val => val > 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(dogAgeToHuman);
};

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
*/
// Basically re-do Coding Challenge #2 but with chaining
// it was pretty easy and straightforward.

/*
////////////////////////////////////////
// The find Method
// Does not return a new array
// Returns the element of the array you are looping.
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const accountWWE = accounts.find(
  acc => acc.owner === 'World Wrestling Entertainment'
);
console.log(accountWWE);
*/

///////////////////////////////////
// The some and every method
/*
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1000);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

///////////////////////////////////////////////
// The flat and flatMap method
/*
// Flattens a nested array to be a simple array.
// Flat method goes only one level deep by default.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat method with chaining on the bank movements
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
// flatMap goes one level deep. So flat would be needed if I need to go deeper.
*/

////////////////////////////////////////
// The sort method. Sorting Arrays
// Mutates the original array.
/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending Numbers
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);
*/

////////////////////////////////////////
// More Ways of Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// Random Dice rolls but 100 times
const random = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(random);

// Real world example
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/

/////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// 2. Easier way to find length of values that are over 1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((acc, mov) => (mov >= 1000 ? acc + 1 : acc), 0);
  .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);

console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3. Reduce method to a new object
const { deposit, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposit' : 'withdrawals'] += cur;
      return sums;
    },
    { deposit: 0, withdrawals: 0 }
  );
console.log(deposit, withdrawals);

// 4. this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// More Practice from online
// Sum
function total(arr) {
  const sum = arr.reduce((acc, mov) => acc + mov, 0);
  return sum;
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
  const sumString = arr.reduce((acc, mov) => acc + mov + '', 0);
  return sumString;
}

console.log(stringConcat([1, 2, 3])); // "123"
console.log(stringConcat([1, 2, 3, 5, 6, 3, 1, 3, 5]));

function totalVotes(arr) {
  const numVote = arr.map(acc => acc.voted).filter(acc => acc === true).length;
  return `${numVote} Voters`;
}

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
  const sumPrice = arr
    .flatMap(acc => acc.price)
    .reduce((acc, mov) => acc + mov, 0);
  return sumPrice;
}

var wishlist = [
  { title: 'Tesla Model S', price: 90000 },
  { title: '4 carat diamond ring', price: 45000 },
  { title: 'Fancy hacky Sack', price: 5 },
  { title: 'Gold fidgit spinner', price: 2000 },
  { title: 'A second Tesla Model S', price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005

//////////////////////////////////////////
// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1: Task 1
const addRecommendFood = function (dogs) {
  dogs.forEach(function (dog) {
    const recFood = dog.weight ** 0.75 * 28;
    dog.recommendFood = Math.floor(recFood);
  });
};

addRecommendFood(dogs);
console.log(dogs);

// 2: Task 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendFood ? 'much' : 'little'
  } `
);

// 3: Task 3
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

const filterOwner = dogs.filter(dog =>
  dog.curFood > dog.recommendFood
    ? ownersEatTooMuch.push(dog)
    : ownersEatTooLittle.push(dog)
);
console.log(filterOwner);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4: Task 4
const tooMuchStr = ownersEatTooMuch.flatMap(dog => dog.owners).join(' and ');
console.log(`${tooMuchStr} dogs eat too much!`);

const tooLittleStr = ownersEatTooLittle
  .flatMap(dog => dog.owners)
  .join(' and ');
console.log(`${tooLittleStr} dogs eat too little!`);

// 5:  Task 5
console.log(dogs.some(dog => dog.curFood === dog.recommendFood));

// 6: Task 6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendFood * 0.9 &&
      dog.curFood < dog.recommendFood * 1.1
  )
);

// 7: Task 7
const dogOkayAmount = [];

const pushOkayAmount = dogs.filter(
  dog =>
    dog.curFood > dog.recommendFood * 0.9 &&
    dog.curFood < dog.recommendFood * 1.1
);
dogOkayAmount.push(pushOkayAmount);
console.log(dogOkayAmount);

// 8: Task 8
const dogArr = dogs.concat();
const sortArr = dogArr.flatMap(dog => dog.recommendFood).sort((a, b) => a - b);
console.log(sortArr);
console.log(dogs);

// Completed all the tasks by myself except Task 2. I was really confused on how the question was phrased. It wasn't bad but a good experience for me to do.

// I just watched the solution. I could have made my code cleaner. Didn't fully get Task 8 cause I thought it was only the values and not the full objects. Still I wanted to do it myself.
