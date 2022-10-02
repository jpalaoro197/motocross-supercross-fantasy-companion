
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://americanmotocrosslive.com/xml/mx/RaceResults.json',
  headers: { 
    'Accept': 'application/json, text/javascript, */*; q=0.01', 
    'Accept-Language': 'en-US,en;q=0.9', 
    'Connection': 'keep-alive', 
    'Referer': 'http://americanmotocrosslive.com/', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36', 
 
  }
};

axios(config)
.then(function RaceData(response) {
  function roundInfo (round, location, track) {
    this.round = round;
    this.location = location;
    this.track = track;
  }
  let RoundInfo = new roundInfo (response.data.R, response.data.E, response.data.T)
  let currentMoto = response.data.S
  let results = (response.data.B)

  let first = (results[0])
  let second = (results[1])
  let third = (results[2])
  let fourth = (results[3])
  let fifth = (results[4])
  let sixth = (results[5])
  let seventh = (results[6])
  let eighth = (results[7])
  let ninth = (results[8])
  let tenth = (results[9])
  let eleventh = (results[10])
  let twelfth = (results[11])
  let thirteenth = (results[12])
  let fourteenth = (results[13])
  let fifteenth = (results[14])
  let sixteenth = (results[15])
  let seventeenth = (results[16])
  let eighteenth = (results[17])
  let nineteenth = (results[18])
  let twentieth = (results[19])
  let twentyFirst = (results[20])
  let twentySecond = (results[21])
  let twentyThird = (results[22])
  let twentyFourth = (results[23])
  let twentyFifth = (results[24])
  let twentySixth = (results[25])
  let twentySeventh = (results[26])
  let twentyEighth = (results[27])
  let twentyNinth = (results[28])
  let thirtieth = (results[29])
  let thirtyFirst = (results[30])
  let thirtySecond = (results[31])
  let thirtyThird = (results[32])
  let thirtyFourth = (results[33])
  let thirtyFifth = (results[34])
  let thirtySixth = (results[35])
  let thirtySeventh = (results[36])
  let thirtyEighth = (results[37])
  let thirtyNinth = (results[38])
  let fortieth = (results[39])

  console.log(results, RoundInfo, currentMoto);
})
.catch(function (error) {
  console.log(error);
});

export default RaceData;