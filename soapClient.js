
let soap = require('soap');
let url = 'http://localhost:3000/wsdl?wsdl';
let args = {name: 'Essam'};
soap.createClient(url, function(err, client) {
  client.MyFunction(args, function(err, result) {
    console.log(JSON.stringify(result));
  });
});