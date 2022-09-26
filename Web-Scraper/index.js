
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://americanmotocrosslive.com/xml/mx/RaceResults.json',
  headers: { 
    'Accept': 'application/json, text/javascript, */*; q=0.01', 
    'Accept-Language': 'en-US,en;q=0.9', 
    'Connection': 'keep-alive', 
    'Cookie': '__utmz=130024863.1661874714.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _fbp=fb.1.1661874714389.450932500; __gads=ID=8b32ae3b617564e6:T=1661874716:S=ALNI_MYB71IhkF441x1CQISK0kHpN9Xu1g; __utma=130024863.330285241.1661874714.1663789519.1663959046.9; __utmc=130024863; __gpi=UID=000008608ac3eb5d:T=1661874716:RT=1663959048:S=ALNI_Mb-GhlTWUl9n4mEQKUnh8w-t1g0Ag; __utmb=130024863.278.9.1663962114926', 
    'Referer': 'http://americanmotocrosslive.com/', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36', 
    'X-Requested-With': 'XMLHttpRequest'
  }
};

axios(config)
.then(function (response) {
  
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

  console.log(first.F, second.F);
})
.catch(function (error) {
  console.log(error);
});



