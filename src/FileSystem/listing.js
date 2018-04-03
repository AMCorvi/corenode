const fs = require('fs');


var files = fs.readdirSync("./lib");

console.log (files)

fs.readdir("./lib/spawn", function(err, document) {

  if (err) {
    throw err;
  };

  console.log(document);

});

console.log("Reading files in 'lib' directory.");
