// Take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
// n! = n * (n-1)!

function firstFactorial(num) {
    if (num < 0) {
        return -1;
    }

    else if (num === 0) {
        return 1;
    }
    
    else {
        return (num * firstFactorial(num - 1))
    }
}

console.log(firstFactorial(12))