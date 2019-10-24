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
  function compare(a, b) {
    return a - b;
  }

  const sortedItems = items.sort(compare);

  console.log(sortedItems.slice(0, n));

};

// printIndices(['apple', 'berry', 'cherry']);
// everyOtherItem(['apple', 'berry', 'cherry']);
smallestNItems([1, 30, 4, 21, 100000], 2);