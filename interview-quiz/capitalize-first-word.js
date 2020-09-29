const capitalize = (str) =>
  str
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');

console.log(capitalize('Hello how are you'));
