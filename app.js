var express = require("express")
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: true}) );

// handle incoming POST from twilio
app.post("/", function (req, res) {
  console.log(req.body)
  // req.body.Body is the text message
  res.set("Content-Type", "text/xml")
  var responseXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
  "<Response>" +
      "<Message>You said: "+req.body.Body+"</Message>" + 
  "</Response>"
  res.send(responseXML)
})

app.get("/", function (req, res) {
  res.send("this is a simple demo")
})

app.listen(5001)



