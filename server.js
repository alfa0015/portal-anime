const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const compression = require('compression');
const secure = require('express-force-https');

let app = express();
app.use(secure,compression(),serveStatic(__dirname + "/dist"));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
