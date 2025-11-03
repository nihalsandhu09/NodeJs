const http = require("http");

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("hey wassup you finaaly write your first serer ");
    res.end;
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 not founds");
  }
});

server.listen(3000, () => console.log("server running"));
