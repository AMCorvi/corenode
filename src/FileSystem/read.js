const fs = require("fs");

let contents = fs.readFileSync("./lib/reasonML_History.md", "UTF-8");

console.log(contents)

// When written without the encoding (second param)  will log Buffer
contents = fs.readFileSync("./lib/reasonML_History.md");

console.log(contents)

fs.readFile("./lib/user.json", "UTF-8", (err, docContent) => {
  if (err) {
    console.log(err);
  };

  console.log(docContent);

});


