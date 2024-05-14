//Program to reverse the elements of an array.
const array=[1,2,3,4,5,6,7,8,9,10];
function reverseArray(array){
    let reversedValues = [];
    //for reverse its starts from last element of array and decrements
    for(let i=array.length-1; i>=0; i--){
        //and push the current value to empty array
        reversedValues.push(array[i]); 
    }
    return reversedValues;
}
const reverse=reverseArray(array);
console.log(reverse);


//second approach:

/* function reverseArray(array){
    return array.reverse()
}
console.log(reverseArray(array)); */