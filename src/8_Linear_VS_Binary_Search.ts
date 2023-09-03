export function linearSearch(arrayOfNumbers: number[], number: number) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log("linearSearch Running");
    if (arrayOfNumbers[i] === number) {
      return i;
    }
  }

  return undefined;
} // Best Case: O(1)
// Average Case: O(n)
// Worst Case O(n)

function binarySearch(arrayOfNumbers: number[], number: number) {
  let startIndex = 0;
  let endIndex = arrayOfNumbers.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    console.log("binarySearch Running");

    if (arrayOfNumbers[middleIndex] === number) {
      return middleIndex;
    }

    if (arrayOfNumbers[middleIndex] < number) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return undefined;
} // Best Case: O(1)
// Average Case: O(log n)
// Worst Case O(log n)

const array = [15, 20, 25, 30, 35, 40, 45, 50, 55];

console.log(linearSearch(array, 40));
console.log(binarySearch(array, 40));
