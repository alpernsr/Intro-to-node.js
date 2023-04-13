const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", function(name) {
    rl.question("Where do you live? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
