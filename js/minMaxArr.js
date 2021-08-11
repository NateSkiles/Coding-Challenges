// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

const arr1 = [100, 0, -5]
const arr2 = [112, 12, 32]

function minMax(...arr) {
    return console.log(Math.min(...arr), Math.max(...arr))
}

minMax(arr1, arr2)
