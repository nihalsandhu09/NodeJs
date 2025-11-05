const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is No secret Data");
    return;
  }
  res.end("hello world");
});
server.listen(7777);
