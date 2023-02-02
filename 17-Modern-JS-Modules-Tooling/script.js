// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
//console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('burgers', 2);
// add('bread', 5);
// add('pizza', 2);
// console.log(cart);

import {
  championStatus,
  registerWrestler,
  superstars,
} from './shoppingCart.js';
registerWrestler('Roman Reigns', 'World Wrestling Entertainment (WWE)');
registerWrestler('MJF', 'All Elite Wrestling (AEW)');
championStatus();
console.log(superstars);
