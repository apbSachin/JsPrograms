//Program to find the second largest element in an array.
const array = [10, 5, 24, 12, 85, 15];

function secondLargestElement(array) {
  //first do sorting in descending order
  array.sort((a, b) => a - b);
  //[85,24,15,12,10,5];by takng this array find second largest element
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[array.length - 2]) {
      return array[i];
    }
  }
}
console.log(secondLargestElement(array));
