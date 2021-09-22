const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (answer1) => {
  console.log(`Welcome ${answer1}`);

  rl.question("What is an activity you like doing? ", (answer2) => {
    console.log(`So you enjoy ${answer2}`);

    rl.question("Which meal is your favourite? ", (answer3) => {
      console.log(`And also you enjoy ${answer3}`);

      rl.question(
        "What is your favourite thing to eat for that meal? ",
        (answer4) => {
          console.log(`${answer4} is loved by most of people`);

          rl.question(
            "What is your superpower? In a few words, tell us what you are amazing at! ",
            (answer5) => {
              console.log(
                `That is great. ${answer5} /n Thank you for your time. `
              );
              console.log(
                `${answer1} enjoys her time doing ${answer2}. She loves to eat ${answer4} for her ${answer3}.` +
                  `Her superpower is : ${answer5}.`
              );

              rl.close();
            }
          );
        }
      );
    });
  });
});
