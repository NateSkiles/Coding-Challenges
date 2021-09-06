// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
function changeEnough(change, ammountDue) {
    let sum = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    return sum >= ammountDue;
}

console.log(changeEnough([2, 100, 0, 0], 14.11),
    changeEnough([0, 0, 20, 5], 0.75),
    changeEnough([30, 40, 20, 5], 12.55),
    changeEnough([10, 0, 0, 50], 3.85),
    changeEnough([1, 0, 5, 219], 19.99));