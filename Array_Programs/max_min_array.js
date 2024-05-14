// Program to find the maximum and minimum elements in an array. in js
const array = [12, 41, 2, 51, 105, 4];
function arrayMaxandMin(array) {
  //assume array[i] is max and min
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    //run the two conditions one for max and one for min and update accordingly
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  //return both values max and min object so we can easily access them using dot notation
  return { max, min };
}
const result = arrayMaxandMin(array);
console.log("max values:", result.max);
console.log("min values:", result.min);
