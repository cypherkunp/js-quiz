const givenArrayOfNumbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  30,
];

const fizzBuzz = (numArray) => {
  return numArray.map((num) => {
    let newElement = num % 3 ? num : num + ' fizz';
    newElement = num % 5 ? newElement : newElement + ' buzz';
    return newElement;
  });
};

console.log(fizzBuzz(givenArrayOfNumbers));
