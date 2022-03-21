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

// Algorithm
const howMuch = function (string) {
  let resultRomanic = 0;
  howMuchArray = string.split(" ");
  if (howMuchArray.includes("Silver")) {
    const howMuchSilver = howMuchArray;
  } else if (howMuchArray.includes("Gold")) {
    const howMuchGold = howMuchArray;
  } else if (howMuchArray.includes("Iron")) {
    const howMuchIron = howMuchArray;
  }
  let filtered = howMuchArray.filter(filterArray); //reduce array to galaxy currency
  // give strings the numbers of galaxy currency
  for (let i = 0; i < filtered.length; i++) {
    switch (filtered[i]) {
      case "glob":
        filtered[i] = glob;
        break;
      case "prok":
        filtered[i] = prok;
        break;
      case "pish":
        filtered[i] = pish;
        break;
      case "tegj":
        filtered[i] = tegj;
        break;
    }
  }
  // romanic principle loop
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] >= filtered[i + 1]) {
      resultRomanic += filtered[i];
    } else if (filtered[i + 1] > filtered[i]) {
      resultRomanic = resultRomanic + (filtered[i + 1] - filtered[i]);
      i++; // to skip adding filtered[i] multiple times
    } else if (filtered[i] >= filtered[filtered.length - 1]) {
      resultRomanic += filtered[i];
    }
  }
  return resultRomanic;
};
