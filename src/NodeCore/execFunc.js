const exec = require("child_process").exec;

// exec("open https://google.com");


// exec("open -a TextEdit");

exec("ls",  function(err, stdout) {
  if (err) throw err ;

  console.log("These are the dir/files found here: \n")

  console.log(stdout);
})


