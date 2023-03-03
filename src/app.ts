import { CipherLeftShift } from "./CipherLeftShift";
import { CipherRightShift } from "./CipherRightShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

//module for testing
const shift: number = 10000000000
console.log("************************Cipher Right Shift")
const crs: CipherRightShift = new CipherRightShift(shift);
displayCipherDecipher(crs, "Hello World!!!");
console.log("************************Cipher Left Shift")
const cls: CipherLeftShift = new CipherLeftShift(shift);
displayCipherDecipher(cls, "Hello World!!!");

