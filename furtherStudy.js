"use strict";

const wordsInCommon = (words1, words2) => {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  let combinedWords = new Set();

  for (const word of words1Set) {
    combinedWords.add(word);
  }

  for (const word of words2Set) {
    combinedWords.add(word);
  }

  return Array.from(combinedWords);
};

// console.log(wordsInCommon(['A', 'list', 'of', 'words'], ['Another', 'list']));


const kidsGame = names => {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if (!firstLetterToWords[name[0]]) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }

  // console.log('dictionary:', firstLetterToWords)
  // const outputLength = output.length
  // console.log('outputlength:', outputLength)
  // console.log('output:', output)
  // console.log('string:', output[outputLength - 1])
  // const lastWord = output[outputLength - 1];
  // console.log('lastword:', lastWord);
  // console.log('lastletter:', lastWord[lastWord.length -1]);

  while (true) {
    const outputLength = output.length
    const lastWord = output[outputLength - 1];

    const lastWordLength = lastWord.length
    const startLetter = lastWord[lastWordLength - 1];
    
    if (!firstLetterToWords[startLetter]) {
      break;
    }

    const word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;
};

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));