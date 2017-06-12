var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  let cmdArr = cmd.split(" ");
  //process.stdout.write('You typed: ' + cmd);
  switch(cmdArr[0])
  {
    case "pwd":
      commands.pwd();
      break;
    case "date":
      commands.date();
      break;
    case "ls":
      commands.ls();
      break;
    case "echo":
      commands.echo(cmdArr.slice(1));
      break;
    case "cat":
      commands.cat(cmdArr[1]);
      break;
    case "head":
      commands.head(cmdArr[1]);
      break;
    case "tail":
      commands.tail(cmdArr[1]);
      break;
    default:
      commands.prompt();
  }
});