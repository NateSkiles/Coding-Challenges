// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Can't divide by 0!"

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "/":
            if (num2 == 0) {
                return "Can't divide by zero."
            }
            return num1 / num2;
        default:
            return "Please enter valid operator";
    }
}

console.log(calculator(2, '+', 2))
console.log(calculator(2, '/', 0))