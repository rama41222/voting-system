const processVotes = (function processVotes() {
  
  let instance;
  
  function init() {
    const candidates = {
      goa: 0,
      delhi: 0,
      mumbai: 0,
      banglore: 0,
      colombo: 0,
      berlin: 0,
      moscow: 0,
      budapest: 0
    };
  
    const voteStore = {};
    
    function vote(time, city) {
      if(!candidates[city]) {
        candidates[city] = 1;
      } else {
        candidates[city] += 1;
      }
      
      if(!voteStore[time]) {
        voteStore[time] = [];
        voteStore[time].push(city);
        
      } else {
        voteStore[time].push(city);
      }
    }
    
    return {
      vote,
      getCandidates: candidates,
      getVoteStore: voteStore
    }
  }
  
  return {
    getInstance: function () {
      if(!instance) {
       instance = init();
      }
      return instance;
    }
  }
})();

const voter = processVotes.getInstance();

setTimeout(function () {
  voter.vote(Date.now(), "goa");
  voter.vote(Date.now(), "budapest");
},100);
setTimeout(function () {
  voter.vote(Date.now(), "colombo");
  
},200);
setTimeout(function () {
  voter.vote(Date.now(), "goa");
  voter.vote(Date.now(), "colombo");
  
},300);
setTimeout(function () {
  voter.vote(Date.now(), "goa");
  
},400);
setTimeout(function () {
  voter.vote(Date.now(), "mumbai");
  voter.vote(Date.now(), "colombo");
  
},500);

setTimeout(function () {
  console.log(voter.getVoteStore);
  console.log(voter.getCandidates);
}, 1000);


// get top 3 voters within time range. 1568919047094 to Date.now()-500

