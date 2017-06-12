var fs = require('fs');

exports.prompt = function() {
    process.stdout.write('\nprompt > ');
}

exports.pwd = function() {
    process.stdout.write(process.cwd());
    this.prompt();
}

exports.date = function() {
    process.stdout.write(new Date().toString());
    this.prompt();
}

exports.ls = function() {
    var files = fs.readdirSync(process.cwd());

    files.forEach(file => process.stdout.write(file + "\n"));
}