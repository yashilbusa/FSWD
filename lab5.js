//Task 1
//Setting up a basic HTTP server: Create a Node.js application that listens for incoming HTTP requests and responds with a simple message.

/*const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello, <b>World </b>\n');
   res.end(`Your IP address  is ${req.socket.localAddress}.`);
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


//Task 2
//Experiment with Various HTTP Methods,Content Types and Status Code

/*const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': "TEXT/HTML"});
  res.write('<h1>Hello , This is the Task 2 of Week 2</h1>');
  res.end();
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


/*const http = require('http');

const host = "127.0.0.1";
const port = 3000;

const requestListner = function(req, res) {
    res.statusCode = 401;
    res.write('Check Console');
    res.end(); 
};
const server = http.createServer(requestListner);

server.listen(port, () => {
    //console.log("Server is Running");
    console.log(`Server running at http://${host}:${port}/`);
});*/





//Task 3
//Test it using browser ,CLI and REST Client

/*const fs = require('fs');
const list = () => {
  try {
    const readData = fs.readFileSync('employee.json');
    const datajson = JSON.parse(readData)
    return datajson
  } catch (e) {
    return [];
  }
}
const data = process.argv[2]
let arr = []
arr = list()
arr.push({ name: data })

fs.writeFileSync('employee.json',
  JSON.stringify(arr)
)

arr = list()
console.log(arr)*/




//Task 4
//Read File student-data.txt file and find all students whose name contains ‘MA’ and CGPA > 7.

/*const fs = require('fs');

const data = fs.readFileSync('./test.txt', {
  encoding: 'utf-8',
  flag: 'r'
});
const datajson = JSON.parse(data)
console.log(datajson)
for (let i in datajson) {
  if (datajson[i].Name.match("Ma") && datajson[i].CGPA > 7)
    console.log(datajson[i])
}*/





//Task 5
//Read Employee Information from User and Write Data to file called ‘employee-data.json’








//Task 6
//Compare Two file and show which file is larger and which lines are different








//Task 7
//Create File Backup and Restore Utility







//Task 8
//Create File/Folder Structure given in json file.







//Task 9
//Experiment with : Create File,Read File,Append File,Delete File,Rename File,List Files/Dirs


