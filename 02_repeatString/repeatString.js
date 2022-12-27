const repeatString = function (stringToInput, timesToReturn) {
    let repeatedString = '';

    if (timesToReturn > 0) {
        while (timesToReturn > 0) {
            repeatedString += stringToInput;
            timesToReturn--; // decrement timesToReturn to close loop
        }
        return repeatedString;
    }
    else if (timesToReturn == 0) {
        return repeatedString;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
