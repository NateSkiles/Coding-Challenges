// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2334454, 5];
let arr3 = [1];

console.log(minMax(arr1))
console.log(minMax(arr2))
console.log(minMax(arr3))