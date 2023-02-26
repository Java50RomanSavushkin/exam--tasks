
const aChar: number = 'a'.charCodeAt(0);
const zChar: number = 'z'.charCodeAt(0);
function shiftRound(string: string, shift: number): string {
    shift < 0 ? shift = Math.abs(shift): shift;
    let checkedSymbol: number;
    const strArr: string[] = [];
    for (const char of string) {
        checkedSymbol = checkSymbol(char)
        if ((checkedSymbol + shift) > zChar) {
            checkedSymbol = (aChar + Math.abs(zChar - (shift + checkedSymbol))) - 1;
            strArr.push(String.fromCharCode(checkedSymbol));
        }
        else if (Number.isFinite(checkedSymbol)) {
            let shiftedCode = checkedSymbol + shift;
            strArr.push(String.fromCharCode(shiftedCode));
        }
        else {
            strArr.push(char)
        }
    }
    return strArr.join("");
}
function checkSymbol(symbol: string): number {
    let symbolCode = symbol.charCodeAt(0);
    return (symbolCode >= aChar && symbolCode <= zChar) ? symbolCode : NaN;
}
console.log(shiftRound("b", -1));