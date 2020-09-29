const isAnagram = (firstString, secondString) => {
  return firstString.split('').sort().join('') === secondString.split('').sort().join('');
};

console.log(isAnagram('silent', 'lister'));
