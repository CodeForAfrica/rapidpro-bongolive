// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const querystring = require('querystring');   
const https = require('https');


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, resp) {
  return resp.send('Karibu');
});


app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/moyo-moshi', function (req, resp) {
  var postData = querystring.stringify({
    'from': req.body.SOURCEADDR,
    'text': req.body.MESSAGE
  });

  var options = {
    hostname: process.env.RP_HOSTNAME,
    port: 443,
    path: process.env.RP_PATH_MOYO,
    method: 'POST',
    headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Content-Length': postData.length
       }
  };
  var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
      process.stdout.write(d);
      resp.send(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
    resp.send(e);
  });

  req.write(postData);
  req.end();
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
