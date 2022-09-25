var myHeaders = new Headers();
myHeaders.append("Accept", "application/json, text/javascript, */*; q=0.01");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Cookie", "__utmz=130024863.1661874714.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _fbp=fb.1.1661874714389.450932500; __gads=ID=8b32ae3b617564e6:T=1661874716:S=ALNI_MYB71IhkF441x1CQISK0kHpN9Xu1g; __utma=130024863.330285241.1661874714.1663789519.1663959046.9; __utmc=130024863; __gpi=UID=000008608ac3eb5d:T=1661874716:RT=1663959048:S=ALNI_Mb-GhlTWUl9n4mEQKUnh8w-t1g0Ag; __utmb=130024863.278.9.1663962114926");
myHeaders.append("Referer", "http://americanmotocrosslive.com/");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36");
myHeaders.append("X-Requested-With", "XMLHttpRequest");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://americanmotocrosslive.com/xml/mx/RaceResults.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));