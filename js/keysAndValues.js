// Create a function that takes an object and returns the keys and values as separate arrays. 
// Return the keys sorted alphabetically, and their corresponding values in the same order.
function keysAndValues(obj) {
	let keys = Object.keys(obj);
	let values = Object.values(obj);
	return [keys, values]
}

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: "Apple", b: "Microsoft", c: "Google" };
let obj3 = { key1: true, key2: false, key3: undefined };

console.log(keysAndValues(obj1));
console.log(keysAndValues(obj2));
console.log(keysAndValues(obj3));