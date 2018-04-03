const question = [
  "What is your name?"
  ,"What is your nationality?"
  ,"What is your preferred programming language?"
]

let answers = [];

function ask(i) {
  process.stdout.write(` ${question[i]} `);
  process.stdout.write(" > ");
};

process.stdin.on('data', function (data) {
  answers.push(data.toString().trim());

  return (answers.length < question.length)
    ? ask(answers.length) : process.exit();
});

process.on("exit", () => {
  process.stdout.write("\n\n\n")

  process.stdout.write(`Hey, ${answers[0]}, you sexy ${answers[1]} mother@#$^!#* go write some ${answers[2]}!!`)

  process.stdout.write("\n\n\n")
})

ask(0);
