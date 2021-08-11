// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

for (let index = 1; index < 100; index++) {
    if (index % 15 === 0) {
        console.log('FizzBuzz');
    }
    else if (index % 5 === 0) {
        console.log('Buzz');
    } 
    else if (index % 3 === 0) {
        console.log('Fizz');
    }
    else if (index === 0) {
        console.log('');
    }
    else { 
        console.log(index);
    }
}
