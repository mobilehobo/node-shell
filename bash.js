var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');
let pipeSplit;
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  pipeSplit = cmd.split(/\s*\|\s*/g);
  //let cmdArr = pipeSplit.shift().split(" ");
  runCommand();
});


var done = function (output) {
  if(pipeSplit.length)
  {
    runCommand(output);
  }
  if (output) {
    process.stdout.write(output);
  }
  process.stdout.write('prompt > ');
};

function runCommand(stdin){
  cmdArr = pipeSplit.shift().split(' ');
  try {
    commands[cmdArr[0]](stdin, cmdArr.slice(1), done);
  } catch (e) {
    done((cmdArr[0]) ? cmdArr[0] + " is not a command\n" : '');
  }
}