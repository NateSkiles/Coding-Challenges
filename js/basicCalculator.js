// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Can't divide by 0!"

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            if (num2 == 0) {
                return "Can't divide by 0!"
            }
            else {
                return num1 / num2;
            }
        case '*':
            return num1 * num2;
        default:
            return "Please enter a valid operator."
    }
}

console.log(calculator(6, "/", 2));
console.log(calculator(6, '/', 0));
console.log(calculator(3, '*', 0));
console.log(calculator(3, '+', 5));
console.log(calculator(3, '-', 5));