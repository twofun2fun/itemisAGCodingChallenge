"use strict";

// variable declaration
const glob = 1;
const prok = 5;
const pish = 10;
const tegj = 50;

const silver = 17;
const gold = 14450;
const iron = 195.5;

let howMuchArray = [];

// filter function
const filterArray = function (string) {
  if (
    string === "glob" ||
    string === "prok" ||
    string === "pish" ||
    string === "tegj"
  ) {
    return string;
  }
};

// give strings the numbers of galaxy currency
const currencyArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "glob":
        array[i] = glob;
        break;
      case "prok":
        array[i] = prok;
        break;
      case "pish":
        array[i] = pish;
        break;
      case "tegj":
        array[i] = tegj;
        break;
    }
  }
  return array;
};

// romanic principle
const romanic = function (array) {
  let resultRomanic = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      resultRomanic += array[i];
    } else if (array[i + 1] > array[i]) {
      resultRomanic = resultRomanic + (array[i + 1] - array[i]);
      i++; // to skip adding array[i] multiple times
    } else if (array[i] >= array[array.length - 1]) {
      resultRomanic += array[i];
    }
  }
  return resultRomanic;
};

// Algorithm
const howMuch = function (string) {
  howMuchArray = string.toLowerCase().split(" "); // lower user input error margin
  if (howMuchArray.includes("silver")) {
    let filtered = howMuchArray.filter(filterArray); // reduce array to galaxy currency
    filtered = currencyArray(filtered);
    const finalResult = romanic(filtered);
    return finalResult * silver;
  } else if (howMuchArray.includes("gold")) {
    let filtered = howMuchArray.filter(filterArray); // reduce array to galaxy currency
    filtered = currencyArray(filtered);
    const finalResult = romanic(filtered);
    return finalResult * gold;
  } else if (howMuchArray.includes("iron")) {
    let filtered = howMuchArray.filter(filterArray); // reduce array to galaxy currency
    filtered = currencyArray(filtered);
    const finalResult = romanic(filtered);
    return finalResult * iron;
  } else {
    let filtered = howMuchArray.filter(filterArray); // reduce array to galaxy currency
    filtered = currencyArray(filtered);
    const finalResult = romanic(filtered);
    if (finalResult === 0) {
      return "I have no idea what you are talking about";
    } else {
      return finalResult;
    }
  }
};

console.log(howMuch("how much is pish tegj glob glob ?"));
console.log(howMuch("how many Credits is glob prok Silver ?"));
console.log(howMuch("how many Credits is glob prok Gold ?"));
console.log(howMuch("how many Credits is glob prok Iron ?"));
console.log(
  howMuch(
    "how much wood could a woodchuck chuck if a woodchuck could chuck wood ?"
  )
);
