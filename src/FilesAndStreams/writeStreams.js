const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface(process.stdin, process.stdout);

const fictionalPerson = {
  name: "",
  sayings: []
};

rl.question("What is the name of a fictional person? ", answer => {
  fictionalPerson.name = answer;

  const stream = fs.createWriteStream(fictionalPerson.name + `.md`);

  rl.setPrompt(`What would ${fictionalPerson.name} say?`);

  stream.write(`${fictionalPerson.name}\n ===================\n\n`);

  rl.prompt();

  rl.on("line", function(saying) {
    if (saying.trim().toLowerCase() === "exit") {
      stream.close();
      rl.close();
      console.log("Bye");
    } else {
      fictionalPerson.sayings.push(saying)
      // append input to steam
      stream.write(`${saying.trim()} \n`);
      rl.setPrompt(
        `What else would ${fictionalPerson.name} say (type 'exit' finish)`
      );
      rl.prompt();
    }
  });
});

rl.on("close", () => {
  console.log(
    "%s is a fictional person that says %j",
    fictionalPerson.name,
    fictionalPerson.sayings
  );
  process.exit();
});
