export function bubbleSort(arrayOfNumbers: number[]) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      console.log("bubbleSort RUNNING");

      if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
        const variable = arrayOfNumbers[i];
        arrayOfNumbers[i] = arrayOfNumbers[j];
        arrayOfNumbers[j] = variable;
      }
    }
  }

  return arrayOfNumbers;
}

function quickSort(arrayOfNumbers: number[]): number[] {
  if (arrayOfNumbers.length <= 1) {
    return arrayOfNumbers;
  }

  let copiedArray = [...arrayOfNumbers];

  const pivot = copiedArray.shift();
  if (pivot == null) {
    return [] as number[];
  }

  let smallerElements = [];
  let centerElements = [pivot];
  let biggerElements = [];

  while (copiedArray.length) {
    const element = copiedArray.shift();
    if (element == null) {
      return [] as number[];
    }

    if (element === pivot) {
      centerElements.push(element);
    } else if (element > pivot) {
      biggerElements.push(element);
    } else {
      smallerElements.push(element);
    }
  }

  smallerElements = quickSort(smallerElements);
  biggerElements = quickSort(biggerElements);

  return smallerElements.concat(centerElements, biggerElements);
}

const array = [15, 20, 25, 100, 35, 80, 45, 350, 55];

console.time("bubbleSort");
console.log(bubbleSort(array));
console.timeEnd("bubbleSort");

console.time("quickSort");
console.log(quickSort(array));
console.timeEnd("quickSort");

// let myArray = [3, 7, 2, 5, 1, 3, 4, 6, 8];

// smallerElement = 2, 1
// centerElements = 3, 3
// Bigger Elements = 7, 5, 4, 6, 8

// Started new tree with the smallerElements array
// smallerElement = 1
// centerElements = 2
// Bigger Elements =

// Started new tree with the biggerElements array
// smallerElement = 5, 4, 6
// centerElements = 7
// Bigger Elements = 8

// Started new branch for smallerElement = 5, 4, 6
// smallerElement = 4
// centerElements = 5
// Bigger Elements = 6
