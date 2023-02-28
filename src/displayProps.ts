import { Shape } from "./Shape";

export function displaySquarePerimeter(shape: Shape) {
    console.log(`square of shape is ${shape.square()}
perimeter of shape is ${shape.perimeter()}`);
}