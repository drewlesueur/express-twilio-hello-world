package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
  //fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
  theBody := r.FormValue("Body")
  fmt.Println(theBody) 

  // req.body.Body is the text message
  w.Header().Set("Content-Type", "text/xml")
  responseXML := 
  `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Message>You said (go): `+theBody+`</Message>
  </Response>`
  fmt.Fprintf(w, responseXML) 
}

func main() {
  http.HandleFunc("/", handler)
  http.ListenAndServe(":5002", nil)
}
