
const readline = require('readline');
const eligibleLimit = 23500;
let eligibility; //boolean

//sample data
let candidates = [
  { 
    id:0,
    name: "delhi",
    votes: 30000
  }, 
  {
    id:1,
    name: "namemumbai",
    votes: 40000
  }, 
  {
    id:2,
    name: "panchbi",
    votes: 50000
  } 
];

function sortCandidatesVote(){
  let result = candidates.sort((a,b) => (a.votes > b.votes) ? 1 : ((b.votes > a.votes) ? -1 : 0)); 
  return result;
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

function addVote(vote){
  let objIndex;
  if(vote == "delhi"){
    objIndex = myArray.findIndex((obj => obj.id == 0)); 
  }else if(vote == "delhi"){
    objIndex = myArray.findIndex((obj => obj.id == 1)); 
  }else if(vote == "delhi"){
    objIndex = myArray.findIndex((obj => obj.id == 2));
  }

  myArray[objIndex].votes++; 
}

function checkHighestVotes(result){
  //sorted desending order array give as a result
  return highestVote = result[0].name;
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