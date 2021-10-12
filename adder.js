function createAdder(num) {
  return function(n) {return num + n};
}

const add3 = createAdder(3);
console.log(add3(1));

