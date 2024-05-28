///sorting
const arr:number[]=[12,41,21,3,45,10];

function sortingArray(arr: number[]):number[]{
    let result=arr.slice().sort((a,b)=>a-b)
    return result
}
console.log(sortingArray(arr));

//remove dublicates

function removeDuplicates(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// const arr: number[] = [12, 41, 21, 3, 45, 10, 12, 3];
console.log(removeDuplicates(arr)); // Output: [12, 41, 21, 3, 45, 10]

function seccondLargest(arr: number[]): number {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
console.log(seccondLargest(arr)); 

export {}