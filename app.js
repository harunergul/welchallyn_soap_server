/*jslint node: true */
"use strict";


var soap = require('soap');
var express = require('express');
var fs = require('fs');

// the splitter function, used by the service
function insertPatientVitalsHandler(args) {
    console.log("Insert Patient Vitals");
    console.log(args);
    var result = [
      {status:"success"}
    ]
 
    return {
        result: result
    }
}

// the service
var serviceObject = {
  WelchallynServiceImplementationService: {
    WelchallynServiceImplementationPort: {
      insertPatientVitals: insertPatientVitalsHandler
        } 
    }
};

// load the WSDL file
var xml = fs.readFileSync('welchallynserviceimplementation.wsdl', 'utf8');
// create express app
var app = express();

// root handler
app.get('/', function (req, res) {
  res.send('Node Soap Example!<br /><a href="https://github.com/macogala/node-soap-example#readme">Git README</a>');
})

// Launch the server and listen
var port = 8000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
  var wsdl_path = "/wsdl";
  soap.listen(app, wsdl_path, serviceObject, xml);
  console.log("Check http://localhost:" + port + wsdl_path +"?wsdl to see if the service is working");
});