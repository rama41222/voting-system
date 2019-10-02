
const readline = require('readline');

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  cli.on('line', (input) => {
    const formattedInput = input.trim().split(' ');
    const command = formattedInput[0];
    const values = formattedInput.splice(1, formattedInput.length -1);
  });