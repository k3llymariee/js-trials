"use strict";


/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code
  for (const i in items) {
    console.log(items[i], i);
  }
};


/** 2. everyOtherItem */
const everyOtherItem = (items) => {
  // Replace this with your code
  for (const i in items) {
    if (i % 2 === 0) {
      console.log(items[i]);
    }
  }
};


/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code
};

// printIndices(['apple', 'berry', 'cherry']);
everyOtherItem(['apple', 'berry', 'cherry']);