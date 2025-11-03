const fs = require("fs");
// const a = 100;

// setImmediate(() => console.log("seImmidiate"));

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("file data: ", data);
// });

// setTimeout(() => console.log("timer expired"), 0);

// function printA() {
//   console.log("a=", a);
// }
// printA();
// console.log("last line of the file");
// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));
// console.log("end");

// Example 2

// const fs = require("fs");
// const a = 100;

// setImmediate(() => console.log("setImmediate"));

// Promise.resolve().then(() => console.log("promise"));

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("file data:", data);
// });

// setTimeout(() => console.log("timer expired"), 0);

// process.nextTick(() => console.log("process.nextTick"));

// function printA() {
//   console.log("a=", a);
// }
// printA();
// console.log("last line of the file");

setImmediate(() => console.log("setimmidate"));
setTimeout(() => console.log("seTtimeout"));

Promise.resolve().then(() => console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("setTimeout 2 "));
  process.nextTick(() => console.log(" 2nd nextTick"));
  setImmediate(() => console.log(" 2nd setimmidate"));

  console.log("file data:");
});

process.nextTick(() => console.log("nextTick"));
console.log("last line of code ");
