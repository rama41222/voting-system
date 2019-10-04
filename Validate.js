
const readline = require('readline');
const eligibleLimit = 23500;
let eligibility; //boolean
//sample data
let candidates = [
  { name: "delhi",
    votes: 30000
  }, 
  {name: "namemumbai",
    votes: 40000
  }, 
  {name: "panchbi",
    votes: 50000
  } 



];

function sortCandidatesVote(){
  let result = candidates.sort((a,b) => (a.votes > b.votes) ? 1 : ((b.votes > a.votes) ? -1 : 0)); 
  console.log(result);
}

function checkEligibility(){ 
  result.forEach(element,i => {
    if(element[i].votes > eligibleLimit){
      return true;
    }else{
      return false;
    }
  });
}


const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  cli.on('line', (input) => {
    const formattedInput = input.trim().split(' ');
    const command = formattedInput[0];
    const values = formattedInput.splice(1, formattedInput.length -1);
  });