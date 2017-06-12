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
      commands.pwd('', done);
      break;
    case "date":
      commands.date('', done);
      break;
    case "ls":
      commands.ls('', done);
      break;
    case "echo":
      commands.echo(cmdArr.slice(1), done);
      break;
    case "cat":
    commands.cat(cmdArr[1], done);
    break;
    case "head":
      commands.head(cmdArr[1], done);
      break;
    case "tail":
      commands.tail(cmdArr[1], done);
      break;
    default:
      done('');
  }
});


var done = function(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
};