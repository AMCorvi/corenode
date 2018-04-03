const stuff = [
  "I'll show you level!",
  "Tell me and I forget, Teach me and I remember, Involve me and I learn.",
  "Get Swifty"
];

var interval = setInterval(function() {
  var i = Math.floor(Math.random() * stuff.length);
  process.stdout.write(`${stuff[i]} \n `)
}, 1000);

process.stdin.on('data', function(data) {
  console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});
