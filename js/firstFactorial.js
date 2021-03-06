// Take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

// function firstFactorial(num) {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

function firstFactorial(num) {
    // Check if less than 0
    if (num < 0) {
        return - 1;
    }
    // If number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }

    else {
        return (num * firstFactorial(num - 1))
    }
}

console.log(firstFactorial(4));