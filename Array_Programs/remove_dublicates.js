//Program to remove duplicate elements from an array.'
const array=[1,2,3,1,5,2,6,4,5,6];
function removeDuplicates(array){
    let originalArray=[];
    for(let i=0; i<array.length; i++){
        //includes gives true or false values
        if(!originalArray.includes(array[i])){
            originalArray.push(array[i]);
        }
    }
    return originalArray;
}
console.log(removeDuplicates(array));