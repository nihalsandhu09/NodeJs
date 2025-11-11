console.log("hello world ");

var a = 1072723727;

var b = 39393939393;
setTimeout(() => {
  console.log("call me right now ");
}, 0); // trust issue with setTimeout
setTimeout(() => {
  console.log("call me ASAp");
}, 3000);
// setTimeout to offload to libuv

function multiplyfn(x, y) {
  const result = a * b;
  return result;
}
var c = multiplyfn(a, b);
console.log(c);
