const http = require("http");
const data = require("./data/products.json");

http
  .createServer(function(req, res) {

    if (req.url === "/") {

      res.writeHead(200, { "Content-Type": "text/json" });
      res.end(JSON.stringify(data, 3));

    } else if (req.url.toLowerCase() === "/instock") {

      listInStock(res);

    } else if (req.url.toLowerCase() === "/onorder") {

      listOnBackOrder(res);

    }
  })
  .listen(8000);

console.log("Server listening on port 8000");

function listInStock(res) {
  var inStock = data.filter(item => {
    return item.availability;
  });

  res.end(JSON.stringify(inStock, 3));
}

function listOnBackOrder(res) {
  var inBackOrder = data.filter(item => {
    return !item.availability;
  });

  res.end(JSON.stringify(inBackOrder, 3));
}
