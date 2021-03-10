// const net = require('net');
// const stdin = process.stdin;
// stdin.setEncoding('utf8');

// const client = net.createConnection({
//   host: '135.23.222.131',
//   port: 3001
// });

// client.setEncoding('utf8');
// client.on("data", (data) => {
//   console.log("data came back from server...");
//   console.log(data);
// })
// stdin.on('data', (input) => {
//   client.write(input);
// })

const net = require('net');

//Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("data came back from server...");
    console.log(data);
  })
  return conn;
}

//connect();

module.exports = {
  connect
};