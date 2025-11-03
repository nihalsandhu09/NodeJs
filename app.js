require("./xyz"); // one module  into naother
// const { calculateSum } = require("./calculate/sum.js");
// // import { calculateSum } from "./sum.js";
// const { multiply } = require("./calculate/multiply.js");

const util = require("node:util");

const { calculateSum, multiply } = require("./calculate");
const data = require("./data.json");
console.log(JSON.stringify(data));
var name = "namaste node js ";
var a = 10;
var b = 20;
console.log(name, a + b);

calculateSum(a, b);

multiply(a, b);
// console.log(global);
// console.log(this); // it will not print global it will print empty object

console.log(globalThis === global);
