//main server js file
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function() {
  console.log("listening on port:" + PORT);
});