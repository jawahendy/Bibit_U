// after refactor

let findStringInBracket = function(str) {
    let word = checkLengthStr(str);
    let indexFirstBracket  = foundIndexAfterFirstBracket(str);
    let indexLastBracket  = foundIndexLastBracket(str);
    return (indexFirstBracket >= 0) ? wordInBracket(word, indexFirstBracket, indexLastBracket) : "";
}

let checkLengthStr = function(str) {
    return (str.length > 0) ? str : "";
}

let foundIndexAfterFirstBracket = function(str) {
    let indexFirstAfterBracket = str.indexOf('(');
    return indexFirstAfterBracket;
}

let foundIndexLastBracket = function(str) {
    let indexLastBracket = str.indexOf(')');
    return indexLastBracket;
}

let wordInBracket = function(str, indexFirst, indexLast) {
    indexFirst += 1;
    return (indexLast >= 0) ?  str.substring(indexFirst, indexLast): "";
}

console.log(findStringInBracket("Hendy"));