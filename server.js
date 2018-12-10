// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const axios = require('axios');
const bodyParser = require('body-parser');

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, resp) {
  return resp.send('Karibu');
});


app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/moyo-moshi', function (req, resp) {
  axios.post(process.env.RP_URL_MOYO, {
    from: req.body.SOURCEADDR,
    text: req.body.MESSAGE
  })
  .then(function (response) {
    return resp.send(response)
  })
  .catch(function (error) {
    return resp.send(error)
  });
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
