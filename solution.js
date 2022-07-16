// 1
const sumIntFrom1ToN = (n) => {
  for (let i = n; i > 0; i--) {
    n = n + (i - 1);
  }
  return n;
};

console.log("1:", sumIntFrom1ToN(14));

// 2
const sumOfCubes = (numOne, numTwo, numThree) =>
  numOne ** 3 + numTwo ** 3 + numThree ** 3;
console.log("2:", sumOfCubes(1, 2, 3));

// 3
const isStrStartOfWord = (str, word) =>
  str === word.slice(0, str.length) ? "true" : "false";
console.log("3:", isStrStartOfWord("tri", "triplet"));

// 4
const isLEZero = (num) => (num <= 0 ? "true" : "false");
console.log("4:", isLEZero(1));

// 5
const countOccurrences = (string, letter) =>
  string.toLowerCase().split(letter).length - 1;
console.log("5:", countOccurrences("I am a string of i's", "i"));

// 6
const calcBaseToExponent = (x, y) => x ** y;
console.log("6:", calcBaseToExponent(3, 3));

// 7
const dogAge = (years) => years * 7;
console.log("7:", dogAge(4));

// 8
const myAge = 36;
const calcLifetimeSupply = (age, amountPerDay) => {
  const totalDays = (100 - age) * 365.25; // 365.25 is an average amount of days per year
  return Math.round(totalDays * amountPerDay);
};
console.log("8:", calcLifetimeSupply(myAge, 2));

// 9
const isWaldoHere = (string) => string.toLowerCase().includes("waldo");
console.log("9:", isWaldoHere("no he is not Waldo"));

// 10
const isEqualSlices = (totalSlices, amountPeople, slicesPerPerson) => {
  if (
    totalSlices % (amountPeople * slicesPerPerson) === 0 ||
    amountPeople * slicesPerPerson <= totalSlices
  ) {
    return "true";
  } else {
    return "false";
  }
};
console.log("10:", isEqualSlices(24, 12, 2));

// 11
const isEqualNumXandO = (string) => {
  const eachLetter = string.toUpperCase().split("");
  let countX = 0;
  for (let i = 0; i < eachLetter.length; i++) {
    if (eachLetter[i] === "X") {
      countX += 1;
      continue;
    }
  }
  let countO = 0;
  for (let i = 0; i < eachLetter.length; i++) {
    if (eachLetter[i] === "O") {
      countO += 1;
      continue;
    }
  }
  let result = countX === countO ? "true" : "false";
  return result;
};
console.log("11:", isEqualNumXandO("ooxXm"));

// 12
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num > 2 && num % 2 === 0) return false;
  const squareRoot = Math.sqrt(num);
  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
};
console.log("12:", isPrime(7));

// 13
const checkValidEmail = (string) => {
  let matchedAtChar = string.match(/[@]/g) || [];
  let matchedDotChar = string.match(/[.]/g) || [];
  if (matchedAtChar.length != 1) return "please enter a valid email";
  if (matchedDotChar.length < 1) return "please enter a valid email";

  return "true, valid email address";
};
console.log("13:", checkValidEmail("oliveira@gmail.com"));

/**
 * 
The "." and the "@" must be in the appropriate places:
- neither "." nor "@" can be the last character
- "." can neither be directly before, nor directly after, "@"
- there cannot be consecutive "." characters
- "@" must have at least one character in front of it
* 
*/
