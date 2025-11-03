const crypto = require("crypto");
console.log("hello world ");

var a = 1072723727;
var b = 39393939393;

// password base key deravtive function this cypto is also managed by l;ibuv
// sync
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("key is genrated ");

// async
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("key is genrated 2 ");
});

function multiplyfn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyfn(a, b);
console.log(c);

// we will not use synchnous method dont use them
