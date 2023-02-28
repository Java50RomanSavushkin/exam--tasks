"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
class Container {
    constructor(shapes) {
        this.shapes = shapes;
    }
    square() {
        return this.shapes.reduce((res, cur) => res + cur.square(), 0);
    }
    perimeter() {
        return this.shapes.reduce((res, cur) => res + cur.perimeter(), 0);
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map