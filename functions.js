"use strict";


/** 1. isHometown */

const isHometown = town => town === 'San Francisco';

// console.log(isHometown('Pleasanton'));

/** 2. getFullName */

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(getFullName('Arpa', 'Imran'));


/** 3. calculateTotal */

const calculateTotal = (basePrice, state, tax = 0.05) => {
  const subtotal = basePrice * (1 + tax);

  let fee = 0;

  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } else {
      fee = 3;
    }
  }
  return subtotal + fee;
}

// console.log(calculateTotal(10, 'CA'));