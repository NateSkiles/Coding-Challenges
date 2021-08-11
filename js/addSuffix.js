// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
function addSuffix(suffix) {
    return function (word) {
        return word + suffix;
    }
}

add_ly = addSuffix('ly');

console.log(add_ly('successful'))