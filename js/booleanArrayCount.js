// Create a function which returns the number of true values there are in an array.
boolArr = [true, false, true, true, false, true, false];

boolArr2 = [];

console.log(countTrue(boolArr));
// console.log(countTrue(boolArr2));

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++;
        }
    }
    return count;
}

function countTrue(arr) {
    let count = 0;
    arr.forEach(bool => {
        if (bool) {
            count++;
        }
    });
}