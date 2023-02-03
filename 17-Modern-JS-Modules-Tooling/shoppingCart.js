// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart!`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart!`);
// }

export const superstars = [];

export const registerWrestler = function (superstar, company) {
  superstars.push({ superstar, company });
  console.log(`${superstar} is currently contracted to ${company}`);
};

export const championStatus = function () {
  const wweChamp = superstars.find(
    wrestler => wrestler.superstar === 'Roman Reigns'
  );
  const aewChamp = superstars.find(wrestler => wrestler.superstar === 'MJF');
  if (wweChamp) {
    console.log(
      `${wweChamp.superstar} is the current WWE Undisputed Universal Champion`
    );
  }
  if (aewChamp) {
    console.log(`${aewChamp.superstar} is the current AEW Champion`);
  }
};
