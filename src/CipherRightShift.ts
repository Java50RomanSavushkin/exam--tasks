import { CipherImpl } from "./CipherDecipher";
export class CipherRightShift extends CipherImpl {
    //TODO
    //ciphering right shift ' ' + shift
    //deciphering left shift '~' - shift
    constructor(shift: number) {
        super(shift, false);
    }
}