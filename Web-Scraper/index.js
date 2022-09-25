
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
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



