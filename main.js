Math.roundTo = function (number, positions) {
    return Math.round(number * (10**positions))/(10**positions)
};


var convertWeight = function (number, unit) {
    var message;
    var result;
    if (unit === 'pounds') {
        result = number * 0.45;
    } else if (unit === 'kilos') {
        result = number * 2.2;
    }
    result = Math.roundTo(result, 7)
    message = "should be about " + result;
    return message;
};

console.log(convertWeight(102.2323423424, 'kilos'));