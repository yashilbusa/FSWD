/*let os = require('os');

//Task 1
//Display User Name , Home Directory and operating system platform
console.log(`Hostname is ${(String(os.hostname))}`);
console.log(`Home Directory is ${(String(os.homedir))}`);
console.log(`Operating System platform is ${(String(os.platform))}`);
*/

const http = require('http');
const os = require('os');



const server = http.createServer((req, res) => {
res.writeHead(200,{'Content-Type': "TEXT/HTML"});

const serverInfo = {
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
     
    uptime: os.uptime(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };


res.write('Server Information:');
res.write('Hostname:', serverInfo.hostname);
res.write('Type:', serverInfo.type);
res.write('Platform:', serverInfo.platform);
res.write('Architecture:', serverInfo.architecture);
res.write('Release:', serverInfo.release);
res.write('Uptime (seconds):', serverInfo.uptime);
res.write('Total Memory (bytes):', serverInfo.totalMemory);
res.write('Free Memory (bytes):', serverInfo.freeMemory);


res.end();
}).listen(8000);
console.log('Server running at http://localhost:8000/');

//Task 2
//Experiment with chalk,upper-case any other External Modules



//Task 3
//Create your own custom module and import/export it to the main module.