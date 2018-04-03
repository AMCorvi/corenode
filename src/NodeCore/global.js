const path = require("path");
let hello = "Hello NodeJS World";

let justNode = hello.slice(6, 6+4);

// console.log(justNode)
console.log(`Rock on World from ${justNode}`);


//path to current directory
console.log(__dirname);

//path to current filename (this file)
console.log(__filename);

console.log(hello, "from", path.basename(__filename));
