const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000;
const app = express();

const url1 = 'http://americanmotocrosslive.com/'

axios(url1).then(response => {
  const html = response.data
  console.log(html)
})
app.listen(PORT, () => console.log(`Express server listening on PORT ${PORT}`))