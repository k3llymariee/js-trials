"use strict";


/** 1. countWords */
function countWords(phrase) {
	let wordCounts = {};

  const wordsList = phrase.split(' ');

  console.log(wordsList);

  for (const word of wordsList) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word] += 1;
    }
  }

  return wordCounts;
}

// console.log(countWords("The quick brown fox jumps over the lazy dog and other fox"));


/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {

  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!melonPrices[price]) {
    return "No melons at that price";
  } else {
    return melonPrices[price].sort();
  }
}

console.log(getMelonsAtPrice(5.50));