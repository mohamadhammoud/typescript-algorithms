export function fib(num: number): number {
  const arrayOfNumbers = [1, 1]; // 1

  for (let index = 2; index <= num; index++) {
    arrayOfNumbers.push(arrayOfNumbers[index - 1] + arrayOfNumbers[index - 2]); // n - 1
  }

  return arrayOfNumbers[arrayOfNumbers.length - 1]; // 1
} // T = O(n) => Linear Time Complexity

console.log(fib(5));
