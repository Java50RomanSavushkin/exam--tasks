import { Cipher } from "./Cipher";
const minASCII: number = 32;
const maxASCII: number = 126;
const nCodes = maxASCII - minASCII + 1;

export class CipherImpl implements Cipher {
    mapperCipher = (symb: string) => {
        const actualShift: number = (symb.charCodeAt(0) - minASCII
            + this.shift) % nCodes;
        return String.fromCharCode(minASCII + actualShift);
    }
    mapperDecipher = (symb: string) => {
        const actualShift: number = (maxASCII - symb.charCodeAt(0) + this.shift)
            % nCodes;
        return String.fromCharCode(maxASCII - actualShift);
    }
    protected constructor(private shift: number, isCipherLeftShift: boolean) {
        if (isCipherLeftShift) {
            [this.mapperCipher, this.mapperDecipher] =
                [this.mapperDecipher, this.mapperCipher]
        }

    }
    cipher(plainText: string): string {
        return this.cipheringDeciphering(plainText, this.mapperCipher);
    }
    decipher(cipherText: string): string {
        return this.cipheringDeciphering(cipherText, this.mapperDecipher);
    }
    private cipheringDeciphering(str: string,
        mapper: (symb: string) => string): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb.charCodeAt(0) <= maxASCII && symb.charCodeAt(0) >=
                minASCII) {
                res = mapper.call(this, symb);
            }
            return res;
        })

        return arRes.join('');
    }


}