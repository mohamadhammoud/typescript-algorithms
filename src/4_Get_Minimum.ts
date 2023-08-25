export function getMinimum(numbers: number[]): number {
  let minimumNumber = numbers[0]; // 1

  // 1
  for (const num of numbers) {
    // n
    if (num < minimumNumber) {
      minimumNumber = num; // 0 (Best Case), 1 (Average Case)
    }
  }

  return minimumNumber; // 1
}

console.log(getMinimum([100, 300, 5, 76, 8]));
