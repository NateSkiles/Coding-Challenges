// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels (but not y).

function getCount(str) {
    var myStr = str.toLowerCase();
    var vowels = ['a','e','i','o','u'];
    var count = 0;

    for (var i = 0; i < myStr.length; i++) {
        for (var j = 0; vowels.length; j++) {
            if (myStr[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}