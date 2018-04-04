const http = require("http");
const fs = require("fs");

http.createServer(
  function (req, res) {

    if (req.method === "GET"){

      res.writeHead(200, {"Content-Type": "text/html"})
      fs.createReadStream("./public/formIndex.html", "UTF-8")
        .pipe(res);

    } else if (req.method === "POST") {

      let body = "";


      req.on("data", function (chunk) {
        body += chunk;
      })

      req.on("end", function () {

        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`
            <!DOCTYPE html>
            <html>
              <head>
                <title> </title>
              </head>
              <body>
                <h2> Your Input Was as Follows:</h2>
                <p> ${body} </p>
              </body>
            </html>
        `)
      })


    }


  }
).listen(3000);

console.log("Form Server is now listen attentivley on port 3000" )
