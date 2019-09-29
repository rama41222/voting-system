// Complexity = O(n)
// Assumes that votes are being casted sequentially
const readline = require('readline');
const processVotes = require('./Vote');
const validationService = require('./Validation');
const voter = processVotes.getInstance();
const validator = validationService.getInstance();

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cli.on('line', (input) => {
  const formattedInput = input.trim().split(' ');
  const command = formattedInput[0];
  const values = formattedInput.splice(1, formattedInput.length -1);

  if(validator.isInvalidInput(command, values)) console.log('Not enough input.')
  else {
    switch (command) {
      case 'vote':
        if (typeof values[0] !== 'string') console.log('Invalid input. Type expected: <string>.')
        if (!validator.validateCities(values[0])) console.log('Please enter a valid city.')
        else voter.vote(Date.now(), values[0]);
        break;
      case 'votes':
        console.log(voter.getCandidates);
        break;
      case 'between':
        if (!validator.validNumbers(values[0], values[1])) console.log('Invalid input. Please enter a valid interval. Type expected: <Integer>');  
        else console.log(voter.getCitiesWithinTimeRange(values[0], values[1]));
        break;
      case 'db':
        console.log(voter.getVoteStore);
        break;
      case 'top':
        if (!validator.validNumbers(values[0], values[1])) console.log('Invalid input. Please enter a valid interval. Type expected: <Integer>');  
        else console.log(voter.top(values[0], values[1]));
        break;
      case 'exit':
        console.log('Bye');
        return process.exit(1);
      default:
        console.log('Please enter a valid input. Accepted values: [ "vote", "votes", "between", "db", "top" ]');
    }
  }
});


