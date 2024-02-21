/*let os = require('os');
let http = require('http');

//Task 1
//Display User Name , Home Directory and operating system platform
console.log(`Hostname is ${(String(os.hostname))}`);
console.log(`Home Directory is ${(String(os.homedir))}`);
console.log(`Operating System platform is ${(String(os.platform))}`);
*/


const http = require('node:http');

const userName = os.userInfo().username;
const homeDirectory = os.homedir();
const platform = os.platform();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');

const table1 = [
    { Username: userName  },
    { HomeDirectory: homeDirectory },
    { Platform: platform}
];
console.table(table1);
});

 server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
}); 









//Task 2
//Experiment With Chalk , Upper - Case any other External Modules


//Task 3
//Create Your own custom Module and Import/Export it to the main Module





