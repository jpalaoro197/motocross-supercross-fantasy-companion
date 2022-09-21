const axios = require('axios');
const cheerio = require('cheerio');
 const express = require('express');
 const PORT = 8000;
const app = express();

const XRay = require("x-ray");

 app.get('/', function(req, res){
  let stream = XRay('http://americanmotocrosslive.com/', 'title').stream()
  stream.pipe(res)
 })
 console.log(stream)

// const url1 = 'http://americanmotocrosslive.com/'
// const url2 = 'https://pulpmxfantasy.com/results/foxraceway2-mx-22/riders'
// const url3 = 'https://www.supercrosslive.com/results/current/2022/S2205/S1F1PRESS.html'
// axios(url1).then(response => {
//   // const results = []
//   // const html = response.data
//   // const $ = cheerio.load(html)
//   // $('.responsive-table', html).each(function(){
//   //   const text = $(this).find(number).text()
//   //   results.push({
//   //     text,
//   //   })
//   // })
//   var scraper = require('table-scraper');
//   scraper
//     .get('http://americanmotocrosslive.com/')
//     .then(function(tableData) {
      
//          tableData === 
//           [ 
//             [ 
             
//             ] 
//           ]
      
//     });
  

//   console.log(tableData)
// }).catch(err => console.log(err))
app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`))


