// Complexity = O(n)
// Assumes that votes are being casted sequentially
const readline = require('readline');
const processVotes = require('./Vote');
const voter = processVotes.getInstance();

const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cli.on('line', (input) => {
  const formattedInput = input.trim().split(' ');
  const command = formattedInput[0];
  const values = formattedInput.splice(1, formattedInput.length -1);
  
  switch (command) {
    case 'vote':
      voter.vote(Date.now(), values[0]);
      break;
    case 'votes':
      console.log(voter.getCandidates);
      break;
    case 'between':
      console.log(voter.getCitiesWithinTimeRange(values[0], values[1]));
      break;
    case 'db':
      console.log(voter.getVoteStore);
      break;
    case 'top':
      console.log(voter.top(values[0], values[1], values[2]));
      break;
    case 'exit':
      console.log('Bye');
      return process.exit(1);
    default:
      console.log('invalid input');
  }
});


