//program o find frequency of count in array
//count: how many times same number repeated in array
const array = [99, 45, 20, 10, 4, 20, 99, 45, 10, 10];

function frequencyCount(array){
    let frequency = {}
    for (let i = 0; i < array.length; i++){
        //let result=array[i];
        //if current element present in frequency increment  if  not do equal to 1
        if(frequency[array[i]]){
            frequency[array[i]]++
        }else {
            frequency[array[i]] = 1;
        }
    }
    return frequency
}
console.log(frequencyCount(array));
