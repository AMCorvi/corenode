const http = require("http");
const fs = require("fs")
const path = require("path")

http.createServer(
 function (req, res) {
   console.log(`${req.method} for ${req.url}`)

  if (req.url === "/") {

    fs.readFile("./public/index.html", function (err, html) {
       res.write(200, {"Content-Type": "text/html" })
       res.end(html)
    })

  } else if (req.url.match(/.css$/)) {

  } else {
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.end("File Note Found")
 }
}).listen(3000);

console.log("Server Up and Running on port 3000!\n")
