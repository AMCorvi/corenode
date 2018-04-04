const fs = require("fs");

const stream = fs.createReadStream("./lib/manyUsers.json", "UTF-8")

let data = "";

stream.once("data", () => {
  console.log("\n\n\n");
  console.log("Started Reading File");
  console.log("\n\n\n");
});


stream.on("data", function (chunk) {
  console.log(`chunk: ${chunk.length}`)
  // /*alternative:*/  process.stdout.write(`chunk: ${chunk.length}`);
  data += chunk;
})

stream.on('end', function () {
  console.log("\n\n\n");
  console.log("Finished Reading File");
  console.log("\n\n\n");
})
