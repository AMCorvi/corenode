function curryUp(fn) {
  var numOfArgs = fn.length;
  return (
    (arguments.length - 1 < numOfArgs)
      ? curryUp.bind(this, ...arguments)
      : fn.call(this, ...Array.prototype.slice.call(arguments, 1) )
  );
};

function add3elem ( a, b, c ) { return a+ b + c };

let from10 = add3elem.bind(null,10);
console.log(add3elem(10, 3, 89));
console.log(
  from10(10) // A bound function will execute on whatever
             // parameter it is given even if not given enough
);

console.log(
  from10.bind(null, 3,89) () // What is desired is a BINDING more parameter to the bound function.
);

let c = curryUp(console.log);
// c("one", "fe", "fo");

let add = (a, b) => a + b;

let adder = curryUp(add);

let addFour = adder(3);

console.log(addFour(4));

