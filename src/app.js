"use strict";
const aChar = 'a'.charCodeAt(0);
const zChar = 'z'.charCodeAt(0);
function shiftRound(string, shift) {
    shift < 0 ? shift = Math.abs(shift) : shift;
    let checkedSymbol;
    const strArr = [];
    for (const char of string) {
        checkedSymbol = checkSymbol(char);
        if ((checkedSymbol + shift) > zChar) {
            checkedSymbol = (aChar + Math.abs(zChar - (shift + checkedSymbol))) - 1;
            strArr.push(String.fromCharCode(checkedSymbol));
        }
        else if (Number.isFinite(checkedSymbol)) {
            let shiftedCode = checkedSymbol + shift;
            strArr.push(String.fromCharCode(shiftedCode));
        }
        else {
            strArr.push(char);
        }
    }
    return strArr.join("");
}
function checkSymbol(symbol) {
    let symbolCode = symbol.charCodeAt(0);
    return (symbolCode >= aChar && symbolCode <= zChar) ? symbolCode : NaN;
}
console.log(shiftRound("aabx!", -4));
//# sourceMappingURL=app.js.map