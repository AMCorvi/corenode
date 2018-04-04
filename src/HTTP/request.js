const https = require("https");
const fs = require("fs");

var options = {
  hostname: "en.wikipedia.org"
  ,port: 443
  ,path: "/wiki/Larry_Levan"
  ,method: "GET"
};

let req = https.request(options, function(res) {
  let responseBody = "";

  console.log("Response from the server start.");
  console.log(`Server Status: ${res.statusCode}`);
  console.log("Response headers: %j", res.headers);

  res.setEncoding("UTF-8");


  res.once("data", (chunk) => {
    console.log(chunk);
  });

  res.on("data", (chunk)=>{
    console.log(`chunk -- ${chunk.length}`)
  })

  res.on("end", function() {
    fs.writeFile("Larry_Levan.html", responseBody, function(err) {

      if (err) throw err;

      console.log("File Downloaded")

    })
  })
});


req.on("error", err => {
  console.log("problem with request ( %s ).", err )
});

req.end();
