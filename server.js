const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("There is No secret Data");
    return;
  }
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world");
});
server.listen(7777, () => {
  console.log("Server running on localhost:7777");
});
