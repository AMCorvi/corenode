
console.log(process.argv);

function grab (flag) {
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
};

var user = grab('--user');
var greeting = grab('--greeting');

console.log(
  (!user || !greeting)
  ? "You Blew It!!"
  : `${greeting} ${user}`
);
