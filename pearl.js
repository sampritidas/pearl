const response = '<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8"><TITLE>301 Moved</TITLE></HEAD><BODY><H1>301 Moved</H1>The document has moved<A HREF="http://www.google.com/">here</A>.</BODY></HTML>';

const { createConnection } = require('net');

const HOST = 'localhost';
const PORT = 4444;
const socket = createConnection(PORT);

process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  console.log(chunk);
  // socket.write(chunk);
})


