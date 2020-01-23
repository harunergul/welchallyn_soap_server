
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parameters of the service call: they need to be called as specified
  * in the WSDL file
  */
  var args = {
    insertDateTime:"10",
    uniquePatientId:"4554"
  };
  // call the service
  client.insertPatientVitals(args, function (err, res) {

    if (err)
      throw err;
      // print the service returned result
  
  });
});