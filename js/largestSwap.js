// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// Numbers with two identical digits (third example) should yield true (you can't do better).
function largestSwap(num) {
    let numArr = [];
	numArr.push(num.toString().split('').reverse().join(''));
    console.log(numArr)

    if (numArr[0] < num || numArr[0] == num) {
        return true
    }
    else {
        return false;
    }   
}

console.log(largestSwap(27))
console.log(largestSwap(4))
console.log(largestSwap(44))