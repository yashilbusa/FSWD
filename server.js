const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello, <b>World </b>\n');
   res.end(`Your IP address  is ${req.socket.localAddress}.`);
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 


