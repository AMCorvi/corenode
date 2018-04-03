const path = require("path");
const util = require("util");
const v8 = require("v8");

// path.basename again pluck the endlevel file/dir name
console.log(path.basename(__filename)); // expected output: "requireMod.js";

// path.join again make construction of file or dir paths simple
var dirUploads = path.join(__dirname, "www", "files", "uploads"); // expected output: "/Users/AMC/Desktop/node/src/NodeCore/www/files/uploads"

// util.log logs to console like console.log but with timestamp
util.log(dirUploads);

// v8.getHeapStatistics provides a POJO of memory usage stats
util.log(v8.getHeapStatistics());
