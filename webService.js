let http = require('http');
let soap = require('soap');

let myService = {
    MyService: {
        MyPort: {
           
            MyFunction: function (args) {
                
                return {
                    greeting: 'sayHello: ' + JSON.stringify(args)
                };
                
            }
        }
    }
};

let xml = require('fs').readFileSync('myservice.wsdl', 'utf8');
let server = http.createServer(function (request, response) {
        response.end("404: Not Found: " + request.url);
    });

let PORT = 3000;

server.listen(PORT);
console.log('server running on port ' + PORT);

soap.listen(server, '/wsdl', myService, xml, function(){
    console.log('server initialized');
  });


