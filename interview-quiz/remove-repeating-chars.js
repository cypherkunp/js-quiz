const str = 'aabbcccdr';

const filterRepeatingChars = (str) =>
  str.split('').filter((char, index, charArray) => charArray.indexOf(char) === index);

console.log(filterRepeatingChars(str));
