function checkSorted(array) {
    // Check if the array is empty or has only one element
    if (array.length <= 1) {
        return "Array is sorted."; // An array with 0 or 1 element is considered sorted
    }

    let isAscending = true;
    let isDescending = true;

    // Iterate through the array starting from the second element
    for (let i = 1; i < array.length; i++) {
        // Check if the current element is greater than the previous element
        if (array[i] < array[i - 1]) {
            isAscending = false; // If true, the array is not sorted in ascending order
        }
        // Check if the current element is less than the previous element
        if (array[i] > array[i - 1]) {
            isDescending = false; // If true, the array is not sorted in descending order
        }
    }

    // Check the sorting order and return the result
    if (isAscending) {
        return "Array is sorted in ascending order.";
    } else if (isDescending) {
        return "Array is sorted in descending order.";
    } else {
        return "Array is not sorted.";
    }
}

// Example usage:
const ascendingArray = [1, 2, 3, 4, 5];
console.log(checkSorted(ascendingArray));

const descendingArray = [5, 4, 3, 2, 1];
console.log(checkSorted(descendingArray));

const unsortedArray = [3, 1, 4, 2, 5];
console.log(checkSorted(unsortedArray));

//ascending and descending
const ascendingArr=[2,1,5,4,8,9,7];
const result=ascendingArr.slice().sort((a,b)=> a-b);
console.log(result);

//decending
const decendingArr=[2,1,5,4,8,9,7];
const results=ascendingArr.slice().sort((a,b)=> b-a);
console.log(results);
