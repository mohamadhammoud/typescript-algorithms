export function sumUpLinearTimeComplexity(value: number) {
  let sumUp = 0;

  for (let index = 1; index <= value; index++) {
    sumUp = sumUp + index;
  }

  return sumUp;
}

function sumUpConstantTimeComplexity(value: number) {
  return (value / 2) * (1 + value);
}

const oneBillion = 100000000;
console.time("test sumUpLinearTimeComplexity");
console.log(sumUpLinearTimeComplexity(oneBillion));
console.timeEnd("test sumUpLinearTimeComplexity");
// --------------------------------------------------------
console.time("test sumUpConstantTimeComplexity");
console.log(sumUpConstantTimeComplexity(oneBillion));
console.timeEnd("test sumUpConstantTimeComplexity");
