"use strict";
// // for(let i = 0; i < 3; i++) {
// //     setTimeout(()=> console.log(i))
// // }
// let num: number;
// num = 12;
// let str: string = "abcd";
// str = "lmn";
// let color: "red"|"blue"|"green";
// color = "red";
// function f1(n1: number, n2: number): number {
//     return n1 + n2;
// }
// //f1(1, "1");
// function f2(array: number[]): number {
//     return array.reduce((res, cur)=> res + cur);
// }
// function stringNumberAction(strNum: string|number): number {
//     let res:number;
//     if(typeof strNum == "string"){
//         res = strNum.length;
//     } else {
//         res = strNum * 2;
//     }
//     return res;
// }
// console.log(stringNumberAction("10"));
// let ar: number[] | string[];
// ar = [1, 2, 3];
// ar = ["1", "avc", "3"];
// let ar1: (number|string)[];
// ar1 = [1, "a"];
// type Color = "red"|"blue"|"green"|"gray"|"yellow";
// let someColor: Color;
// type Comparator =( (num1: number, num2: number) => number) | ((ar:number[])=> number);
// let someComparator: Comparator;
// someComparator = (n1, n2) => n1 - n2;
// someComparator = f1;
// someComparator = f2;
// type Person = {
//     id: number;
//     name: string;
//     age?: number;
// }
// const person:Person = {id: 123, name: "Vasya"}
// //HW #29
// function shiftRound(str: string, shift: number): string {
//     //TODO
//     //shift any positive number
//     //adds "shift" to ASCII codes of lower case letters
//     //if the shifted code will be greater than ASCII code 'z'
//     // the code should be begun from ASCII code 'a'
//     //source letter 'a' will be 'c' if "shift" == 2
//     //source letter 'z' will be 'b' if shift ==2
//     //example: shiftRound("aabx!", 4) => ("eefb!")
//     return "";
// }
// function unshiftRound(str: string, shift: number): string {
//     //subtracts "shift" from ASCII codes of lower case letters
//     //if the shifted code will be less than ASCII code 'a'
//     // the code should be begun from ASCII code 'z'
//     //source letter 'c' will be 'a' if "shift" == 2
//     //source letter 'b' will be 'z' if shift ==2
//     //example: ushiftRound("eefb!", 4) => ("aabx!")
//     return "";
// }
// const aChar: number = 'a'.charCodeAt(0);
// const zChar: number = 'z'.charCodeAt(0);
// function shiftRound(string: string, shift: number): string {
//     shift < 0 ? shift = Math.abs(shift): shift;
//     let checkedSymbol: number;
//     const strArr: string[] = [];
//     for (const char of string) {
//         checkedSymbol = checkSymbol(char)
//         if ((checkedSymbol + shift) > zChar) {
//             checkedSymbol = (aChar + Math.abs(zChar - (shift + checkedSymbol))) - 1;
//             strArr.push(String.fromCharCode(checkedSymbol));
//         }
//         else if (Number.isFinite(checkedSymbol)) {
//             let shiftedCode = checkedSymbol + shift;
//             strArr.push(String.fromCharCode(shiftedCode));
//         }
//         else {
//             strArr.push(char)
//         }
//     }
//     return strArr.join("");
// }
// function checkSymbol(symbol: string): number {
//     let symbolCode = symbol.charCodeAt(0);
//     return (symbolCode >= aChar && symbolCode <= zChar) ? symbolCode : NaN; 
// }
// console.log(shiftRound("aabx!", -4)); 
// let ar: number[] | string[];
// ar = [1, 2, 3];
// ar = ["1", "avc", "3","e"];
// console.log(ar)
const aCodeAscii = 'a'.charCodeAt(0);
const zCodeAscii = 'z'.charCodeAt(0);
const nEnglishLetters = zCodeAscii - aCodeAscii + 1;
//HW #29
function shiftRound(str, shift) {
    //TODO
    //shift any positive number
    //adds "shift" to ASCII codes of lower case letters
    //if the shifted code will be greater than ASCII code 'z'
    // the code should be begun from ASCII code 'a'
    //source letter 'a' will be 'c' if "shift" == 2
    //source letter 'z' will be 'b' if shift ==2
    //example: shiftRound("aabx!", 4) => ("eefb!")
    return cipherDecipher(str, shift, mapperCipher);
}
function unshiftRound(str, shift) {
    //subtracts "shift" from ASCII codes of lower case letters
    //if the shifted code will be less than ASCII code 'a'
    // the code should be begun from ASCII code 'z'
    //source letter 'c' will be 'a' if "shift" == 2
    //source letter 'b' will be 'z' if shift ==2
    //example: ushiftRound("eefb!", 4) => ("aabx!")
    return cipherDecipher(str, shift, mapperDecipher);
}
function cipherDecipher(str, shift, mapperFun) {
    //const arStr: string[] = Array.from(str);
    const arStr = Array.from(str);
    const arRes = arStr.map(symb => {
        let res = symb;
        if (symb <= 'z' && symb >= 'a') {
            res = mapperFun(symb, shift);
        }
        return res;
    });
    return arRes.join('');
}
function mapperCipher(symb, shift) {
    const actualShift = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb, shift) {
    const actualShift = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
//# sourceMappingURL=app.js.map