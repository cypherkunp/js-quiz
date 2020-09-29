function Maybe(value) {
  this.value = value;
}

Maybe.prototype.result = () => {
  return this.value;
};

Maybe.prototype.execute = (func) => {
  if (typeof this.value === 'undefined') {
    return new Maybe(undefined);
  }
  return new Maybe(func(this.value));
};

//----
function getName(value) {
  return {
    name: 'Devvrat',
  };
}

const welcomeMessage = new Maybe(10)
  .execute((x) => getName(x).name)
  .execute((x) => 'Hello' + x)
  .result();

console.log(welcomeMessage);
