const getMostRecurringChar = (string) => {
  let maxCharCounter = {
    name: '',
    count: 0,
  };

  let charCount = 1;
  let charName = '';

  string
    .split('')
    .sort()
    .forEach((char, index) => {
      if (index === 0) {
        charName = char;
      } else if (charName === char) {
        charCount += 1;
      } else {
        if (charCount > maxCharCounter.count) {
          maxCharCounter.count = charCount;
          maxCharCounter.name = charName;
        }
        charName = char;
        charCount = 1;
      }
    });

  return maxCharCounter;
};

console.log(getMostRecurringChar('aabbbbbbbbaaacada'));
