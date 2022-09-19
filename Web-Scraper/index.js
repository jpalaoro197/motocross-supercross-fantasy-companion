const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;
const app = express();

const url1 = 'http://americanmotocrosslive.com/'
const url2 = 'https://pulpmxfantasy.com/results/foxraceway2-mx-22/riders'

axios(url2).then(response => {
  const results = []
  const html = response.data
  const $ = cheerio.load(html)
  $('#ui-datatable-even ui-widget-content ng-star-inserted', html).each(function(){
    const text = $(this).text()
    results.push({
      text,
    })
  })
  console.log(results)
}).catch(err => console.log(err))
app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`))