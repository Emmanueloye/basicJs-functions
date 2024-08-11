// Check for vowel letters based on the strings passed into the function.
const checkVowel = function (string) {
  const vowels = 'aeiou';
  const input = string.toLowerCase().split('');
  const result = [];
  input.forEach((el, index) => {
    if (vowels.split('').includes(el)) {
      result.push({ vowel: el, position: index });
    }
  });
  const count = result.length;
  return { result, count, isVowel: result.length > 0 ? true : false };
};

// Check if a number passed in is even or odd number.
const evenOrOdd = function (number) {
  if (number % 2 === 0) {
    return `${number} is an even number`;
  }
  return `${number} is an odd number`;
};

// Get middle character. If the length of the character is even, return the two middle letter and a single letter for length of odd.

const getMiddleCharacter = function (string) {
  if (string.length % 2 === 0) {
    const startIndex = string.length / 2;
    const endIndex = startIndex + 1;

    return string.slice(startIndex - 1, endIndex);
  }
  const index = string.length / 2;
  return string.at(index);
};

// accum("abcd") -> "A-Bb-Ccc-Dddd" - function output
const mumbling = function (string) {
  const word = string.split('').map((el, i) => {
    const item = el.repeat(i + 1);
    return item.at(0).toUpperCase() + item.slice(1);
  });

  return word.join('-');
};

// Filter out string from an array
const filterString = function (array) {
  return array.filter((el) => typeof el === 'number');
};

// mask credit card details

const mask = function (number) {
  const last4Number = number.slice(-4);
  return last4Number.padStart(number.length, '*');
};
