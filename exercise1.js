const fs = require("fs");

// const data = fs.readFileSync("./notes.txt", "utf-8");
// console.log(data);

// fs.readFile("./notes.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("this prints before file content ");

fs.writeFileSync("log.txt", "node.js fs module is fun ");
console.log("sync file written");

fs.writeFile("log-sync.txt", "this is async behaviour ", (err) => {
  if (err) throw err;
});
console.log("file written succesfully ");

fs.appendFileSync("log.txt", "lets append some text");

fs.appendFile("log-sync.txt", "lets appedn async", (err) => {
  if (err) throw err;
  console.log("text appende ");
});
