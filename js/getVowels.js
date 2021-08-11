function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a','e','i','o','u'];
    var myStr = str.toLowerCase()
    for (let i = 0; i < myStr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (myStr[i] === vowels[j]) {
                vowelsCount++;
            }
        }
        
    }
    return vowelsCount;
}

