const events = require("events");
const util = require("util");

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

const ben = new Person("Shia LeBouf");

ben.on("yelled", function(said) {
  console.log(`${this.name}, said ${said}`);
});

ben.emit("speak", "you will not divide us!");
