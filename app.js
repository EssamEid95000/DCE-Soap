const soap = require('soap');
const fs = require('fs')

let ip  = '192.168.0.1';
let wsdlFile = 'ISXCentralDeviceGroupService_v2_0';

const url = `http://${ip}/integration/services/${wsdlFile}?wsdl`;
const auth = "Basic " + new Buffer.from("apc" + ":" + "apc").toString("base64");

soap.createClient(url, {
      wsdl_headers: {
        Authorization: auth
      }
    }, function (err, client) {
      //console.log(client);
      const security = new soap.BasicAuthSecurity('apc', 'apc')
      client.setSecurity(security);
      //console.log(client);
      client.getAllDeviceGroups(function (err, result) {
        console.log(err)
        console.log(JSON.stringify(result))
        fs.writeFile('./result.json', JSON.stringify(result), () => {
          console.log("ok");
        })
      })
    

  })

  
//}
//)


// fs.writeFile('./result.xml', client, ()=>{
  //   console.log("ok");
  // })
  //client.getParentDeviceGroup(function(err, result) {
  //client.getAllDeviceGroups({ wsdl_headers: {Authorization: auth} },function(err, result) {
    //console.log(err);
    //console.log(JSON.stringify(result));
 // })