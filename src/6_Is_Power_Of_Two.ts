export function isPowerOfTwo(number: number): boolean {
  if (number < 1) {
    return false;
  }

  let dividedNumber = number;

  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }

    dividedNumber = dividedNumber / 2;
  }

  return true;
}

// Best Case: number = 13 => O(1)
// Worst Case: number = 1,000,000 => O(log n)

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(11));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));
