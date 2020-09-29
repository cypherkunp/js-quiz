///for the input: "abbbcccccda" the longest uniform substring is "bbb"

const getLongestUniformStr = (str) => {
  let uniStrArr = [];
  let uniStr = '';
  let currentChar = '';
  str.split('').forEach((char) => {
    if (currentChar === char) {
      uniStr += char;
    } else {
      if (uniStr) uniStrArr.push(`${uniStr.length}:${uniStr}`);
      currentChar = char;
      uniStr = char;
    }
  });

  return uniStrArr.sort().pop().split(':')[1];
};

console.log(getLongestUniformStr('abbbccccda'));
