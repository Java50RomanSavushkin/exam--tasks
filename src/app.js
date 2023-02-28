"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const displayProps_1 = require("./displayProps");
const Container_1 = require("./Container");
const rectangle = new Rectangle_1.Rectangle(3, 4);
const square = new Square_1.Square(10);
const container = new Container_1.Container([rectangle, square]);
(0, displayProps_1.displaySquarePerimeter)(container);
//# sourceMappingURL=app.js.map