function mul(x) {
  let result = x;
  function curry(y) {
    result *= y;
    return curry;
  }
  curry.valueOf = () => result;
  return curry;
}

console.log(+mul(2)(4)(5));
