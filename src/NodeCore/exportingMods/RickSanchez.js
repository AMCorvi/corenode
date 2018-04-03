const Person = require('./lib/Person');

const shia = new Person("Shia LeBouf");
const rick = new Person("Rick Sanchez");

shia.on("yelled", function(said) {
  console.log(`${this.name}, said ${said}`);
});

rick.on("say", function(said) {
  console.log(`${this.name}, said ${said} `)
});


shia.emit("speak", "you will not divide us!"); // won't work because the 'speak' event was not declared.

rick.emit("say", "I'll show you level.");
