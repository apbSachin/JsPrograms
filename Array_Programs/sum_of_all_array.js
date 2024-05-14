//sum of all array elements
const array = [12, 13, 41, 54];
function sumOfArray(array) {
  let sum = 0;
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const result = sumOfArray(array);
console.log(result);
