const longestWord = (str) =>
  str.split(' ').reduce((accumulator, currentValue) => {
    if (accumulator.length < currentValue.length) return currentValue;
    else return accumulator;
  });

console.log(longestWord('Top Shelf Web Development Training on Scotch'));
