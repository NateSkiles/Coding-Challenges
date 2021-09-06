// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    let returnArr = [];
    let min = arr[0];
    let max = arr[0];
    
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i];
      }
      if(arr[i] > max) {
        max = arr[i];
      }
    }

    returnArr.push(min);
    returnArr.push(max);
    return returnArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2334454, 5];
let arr3 = [1];

console.log(minMax(arr1))
console.log(minMax(arr2))
console.log(minMax(arr3))