// Complexity = O(n)
// Assumes that votes are being casted sequentially

const processVotes = (function processVotes() {
  
  const voteStore = {};
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
    
    function vote(time, city) {
      if(!candidates[city]) {
        candidates[city] = 1;
      } else {
        candidates[city] += 1;
      }
      voteStore[time] = city;
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
},100);

setTimeout(function () {
  voter.vote(Date.now(), "colombo");
  
},150);
setTimeout(function () {
  voter.vote(Date.now(), "colombo");
  
},200);
setTimeout(function () {
  voter.vote(Date.now(), "colombo");
  
},300);
setTimeout(function () {
  voter.vote(Date.now(), "goa");
  
},400);
setTimeout(function () {
  voter.vote(Date.now(), "mumbai");
  
},500);

setTimeout(function () {
  voter.vote(Date.now(), "budapest");
},600);

// get top voted city within time range. 1568919047094 to Date.now()-500

function getCitiesWithinTimeRange() {
  const votersList = [];
  const topCities = {};
  const top = Date.now()-300;
  const bottom = 1568919436311;
  
  Object.keys(voter.getVoteStore).forEach((value, key) => {
    if(parseInt(value) < top && parseInt(value) > bottom) {
      votersList.push(voter.getVoteStore[value]);
    }
  });
  
  votersList.forEach( (city) => {
    if(!topCities[city]) {
      topCities[city] = 1;
    } else {
      topCities[city] += 1;
    }
  });
  
  return topCities;
}

// get top n cities within time range. 1568919047094 to Date.now()-500
setTimeout(function () {
  const topCities = getCitiesWithinTimeRange();
  const sortedCitites = Object.keys(topCities).map(v => ({a:topCities[v], b:v})).sort((b, a) => (a.a - b.a));
  console.log(sortedCitites);
}, 1000);
