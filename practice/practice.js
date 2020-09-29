//trying to get work with simpler api
//(no oauth) to better understand express

const express = require('express');
const request = require('request');
let ejs = require('ejs');

const app = express();

var url = 'https://api.chucknorris.io/jokes/random';

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  request(url, function(error, response, body) {
    if(error) {
      console.log(error);
    }else {
      res.render("chuck", {
        jokeData: (JSON.parse(body)).value
      });
    }

  });
});

console.log('Listening on 7777');
app.listen(7777);


// 'https://api.zoom.us/v2/meetings/9841082667/recordings'

// res.render("transcript", {
//                           transcript: (JSON.parse(body)).
//                         })
