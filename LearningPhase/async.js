const fs = require("fs");

const https = require("https");

console.log("hello world ");

var a = 7464646464;
var b = 393939;
const data = fs.readFileSync("./file.txt", "utf-8");
console.log(data);

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data succesfully");
});

setTimeout(() => {
  console.log("setTimeopt calleld aftr 5 seconds ");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("file data: ", data);
});

function multiplyfn(a, b) {
  const result = a * b;
  return result;
}
const c = multiplyfn(a, b);
console.log(c);
