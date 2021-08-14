// Take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.

function firstFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(firstFactorial(16));