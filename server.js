const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const forceSsl = require('force-ssl-heroku');

let app = express();
app.use(forceSsl);
app.use(compression(),serveStatic(__dirname + "/dist"));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});