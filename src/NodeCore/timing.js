const waitTime = 3000;
let currentTime = 0;
const waitInterval = 500;

let percentWaited = 0;

// console.log("Wait for it")

let dots = "";

function writeWaitingPercentage(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  dots = dots.concat(".")
  process.stdout.write(`waiting ${dots} ${p}% `);
};

var interval = setInterval(() => {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercentage(percentWaited);
}, waitInterval);

setTimeout(() => {
  clearInterval(interval);
  writeWaitingPercentage(100)
  console.log("done");
}, waitTime)

writeWaitingPercentage(percentWaited);
