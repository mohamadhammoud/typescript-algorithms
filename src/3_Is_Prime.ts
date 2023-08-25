export function isPrime(number: number): boolean {
  // 1
  for (let i = 2; i < number / 2; i++) {
    // n
    if (number % i === 0) {
      return false; // 1
    }
  }
  return true; //1
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)

console.log(isPrime(11));
console.log(isPrime(9));
