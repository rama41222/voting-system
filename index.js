// Complexity = O(n)
// Assumes that votes are being casted sequentially
const readline = require('readline');
const processVotes = require('./Vote');
const validationService = require('./Validation');
const voter = processVotes.getInstance();
const validator = validationService.getInstance();
const fs = require('fs');

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processInput(input) {
  const command = input[0];
  const values = input.splice(1, input.length -1);

  if(validator.isInvalidInput(command, values)) console.log('Not enough input.')
  else {
    switch (command) {
      case 'vote':
        if (!validator.validateCities(values[0])) console.log('Please enter a valid city.')
        else voter.vote(Date.now(), values[0]);
        break;
      case 'votes':
        console.log(voter.getCandidates);
        break;
      case 'between':
        if(values.length != 2) console.log('Not enough input. Please enter start and end values. Example: between 5 10');
        else if (!values.every(validator.validNumber)) console.log('Invalid input. Please enter a valid interval. Type expected: <Int>');  
        else console.log(voter.getCitiesWithinTimeRange(values[0], values[1]));
        break;
      case 'db':
        console.log(voter.getVoteStore);
        break;
      case 'top':
        if(values.length != 3) console.log('Not enough input. Please enter start, end and limit values. Example: top 5 10 2');
        else if (!values.every(validator.validNumber)) console.log('Invalid input. Please enter a valid interval. Type expected: <Int>');  
        else console.log(voter.top(values[0], values[1], values[2]));
        break;
      case 'exit':
        console.log('Bye');
        return process.exit(1);
      default:
        console.log('Invalid command: ', command);
        console.log('Please enter a valid command. Accepted values: [ "vote", "votes", "between", "db", "top", "exit"]');
    }
  }
}

if (process.argv.length > 2) {
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if(err && err.code === 'ENOENT') { 
      console.log("Input file does not exist."); 
      process.exit();
    }
    else if(err){
      throw err;
    }
    else {
      var dataArray = data.split(/\r?\n/);
      dataArray.filter(row => row.trim()).forEach(row => processInput(row.split(',')));
    }
  });
} else {
  console.log('Update: Inputs can be provided through a CSV file. Example: `node index.js <filepath>`');
  cli.on('line', (input) => {
    const formattedInput = input.trim().split(' ');
    processInput(formattedInput);
  });
}


