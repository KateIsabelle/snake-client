//Setup User Interface 
 //Specifically, so that we can handle user input via stdin
 let connection;

 const handleUserInput = function(key) {
  if (key === '\u0003') {
  process.exit();
} else if (key === 'w') {
  connection.write("Move: up");
} else if (key === 's') {
  connection.write("Move: down");
} else if (key === 'd') {
  connection.write("Move: right");
} else if (key === 'a') {
  connection.write("Move: left");
} else if (key === 'g') {
  connection.write("Say: gotcha");
} else if (key === 'b') {
  connection.write("Say: makin bacon pancakes")
} else if (key === 'h') {
  connection.write("Say: oh, hi there");
}
};

//Setup user interface
//so that we can handle user input via stdin
const setupInput = function(conn) {
  connection = conn;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();
stdin.on('data', handleUserInput);
return stdin;
}



module.exports = {
  setupInput
}