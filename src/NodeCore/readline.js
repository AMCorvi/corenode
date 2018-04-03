const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

const realPerson = {
  name: "",
  sayings: []
};

rl.question("What is the name of a real person? ", answer => {
  realPerson.name = answer;


  rl.setPrompt(`What would ${realPerson.name} say?`);

  rl.prompt();

  rl.on("line", function(saying) {
    saying.trim().toLowerCase() === "exit"
      ? rl.close()
      : (() => {
          // add input to realPerson.sayings
          realPerson.sayings.push(saying);
          // add
          rl.setPrompt(
            "What else would ${realPerson.name} say (type 'exit' finish)"
          );
          rl.prompt();
        })();
  });
});

rl.on("close", () => {
  console.log(
    "%s is a real person that says %j",
    realPerson.name,
    realPerson.sayings
  );
  process.exit();
});
