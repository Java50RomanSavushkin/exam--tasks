import { Shape } from "./Shape";
export class Container implements Shape {
    constructor(private shapes: Array<Shape>) { }
    square(): number {
        return this.shapes.reduce((res, cur) => res + cur.square(), 0);
    }
    perimeter(): number {
        return this.shapes.reduce((res, cur) => res + cur.perimeter(), 0);
    }

}