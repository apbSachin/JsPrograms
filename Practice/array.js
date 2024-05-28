"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///sorting
var arr = [12, 41, 21, 3, 45, 10];
function sortingArray(arr) {
    var result = arr.slice().sort(function (a, b) { return a - b; });
    return result;
}
console.log(sortingArray(arr));
//remove dublicates
function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
// const arr: number[] = [12, 41, 21, 3, 45, 10, 12, 3];
console.log(removeDuplicates(arr)); // Output: [12, 41, 21, 3, 45, 10]
function seccondLargest(arr) {
    arr.sort(function (a, b) { return a - b; });
    return arr[arr.length - 2];
}
console.log(seccondLargest(arr));
