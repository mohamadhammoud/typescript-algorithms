export function mergeSort(arrayOfNumbers: number[]): number[] {
  if (arrayOfNumbers.length < 2) {
    return arrayOfNumbers;
  }

  if (arrayOfNumbers.length === 2) {
    return arrayOfNumbers[0] > arrayOfNumbers[1]
      ? [arrayOfNumbers[1], arrayOfNumbers[0]]
      : arrayOfNumbers;
  }

  const middle = Math.floor(arrayOfNumbers.length / 2);
  const leftArray = arrayOfNumbers.slice(0, middle);
  const rightArray = arrayOfNumbers.slice(middle);

  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  while (
    leftIndex < leftSortedArray?.length ||
    rightIndex < rightSortedArray?.length
  ) {
    if (
      leftIndex >= leftSortedArray.length ||
      leftSortedArray[leftIndex] > rightSortedArray[rightIndex]
    ) {
      mergedArray.push(rightSortedArray[rightIndex]);
      rightIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftIndex]);
      leftIndex++;
    }
  }

  return mergedArray;
}

const array = [15, 20, 25, 100, 35, 80, 45, 350, 55];

console.time("mergeSort");

console.log(mergeSort(array));

console.timeEnd("mergeSort");
