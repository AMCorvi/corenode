const fs = require("fs");
const path = require("path");



fs.readdir("./lib", function (err, files) {

  if (err) console.log(err);

  files.forEach(fileName => {
    const file = path.join(__dirname, "lib", fileName)
    const stats = fs.statSync(file);

    (stats.isFile() &&  fileName !== ".DS_Store")
      ? (
          fs.readFile(file,"UTF-8", (err, content) => {
            console.log(content)
          }
        ))
      : (null);

  });
})
