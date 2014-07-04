var express = require("express")
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: true}) );

app.post("/", function (req, res) {
  console.log(req.body)
  // req.body.Body is the text message
  res.send("done.")
})

app.listen(5001)



