const fn = function (value) {
  if (value < 10) {
    return "Value меньше 10";
  }
  const result = value + 45;
  return result;
};

console.log(fn(5));
console.log(fn(100));
console.log(fn(10));
