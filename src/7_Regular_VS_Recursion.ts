export function regularFactorial(number: number): number {
  let result = 1;

  for (let index = 2; index <= number; index++) {
    result = result * index;
  }

  return result;
} // O(n)

function recursiveFactorial(number: number): number {
  if (number === 1) {
    return 1;
  }

  return number * recursiveFactorial(number - 1);
} // in every call it is O(1)
// But we trigger multiple function calls => n function calls
// T = n * O(1) => O(n)

console.log(regularFactorial(3));
console.log(recursiveFactorial(3));
