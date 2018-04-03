const events = require("events");
const util = require("util");

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

module.exports = Person;
