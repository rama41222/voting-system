const processVotes = (function processVotes() {
  
  const voteStore = {};
  let instance;
  const timeRegExp = new RegExp(/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/)
  const lettersRegExp = new RegExp(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/gi)


  
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
      //Checking to make sure they are giving a valid time format NN:NN
      if(!(timeRegExp.test(time))) return console.log(`Please enter a valid time`);
      //Checking to make sure the city does not contain special charicters
      if(lettersRegExp.test(city)){
        if(!candidates[city]) {
          candidates[city] = 1;
        } else {
          candidates[city] += 1;
        }
        voteStore[time] = city;
      }
      else return console.log(`Please enter a valid city`);
    }
  
    function getCitiesWithinTimeRange(start, end) {
      const votersList = [];
      const topCities = {};
     //Checking to make sure the times are acccurate
      if(timeRegExp.test(start)
      && timeRegExp.test(end)) {
      // this needs keys and values to get the cities within time range
      Object.keys(voteStore).forEach(value => {
        if(Number(value) <= end && Number(value) >= start) {
          votersList.push(voteStore[value]);
        }
      });
      }
      else return console.log(`Please enter valid a valid time`)


    
      //that is not going to work, there are going to be all times not cities
      votersList.forEach( city => {
        if(!topCities[city]) {
          topCities[city] = 1;
        } else {
          topCities[city]++;
        }
      });
    
      return topCities;
    }
    
    function getTop(start, end, limit) {
      let topCities;

      if(timeRegExp.test(start) && timeRegExp.test(end)) {
        topCities = getCitiesWithinTimeRange(start, end);
      }
      else return console.log(`Please enter valid time format`);

      return  Object.keys(topCities).map((v) => ({votes: topCities[v], city: v}))
        .sort((first, second) => (second.votes - first.votes))
        .map(v => (v.city)).slice(0, limit);
    }
    
    return {
      vote,
      getCandidates: candidates,
      getVoteStore: voteStore,
      getCitiesWithinTimeRange: getCitiesWithinTimeRange,
      top: getTop
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

module.exports = Object.freeze(processVotes);
