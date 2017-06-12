var fs = require('fs');

exports.prompt = function(filename) {
    process.stdout.write('\nprompt > ');
};

exports.pwd = function(filename) {
    process.stdout.write(process.cwd());
    this.prompt();
};

exports.date = function(filename) {
    process.stdout.write(new Date().toString());
    this.prompt();
};

exports.ls = function(filename) {
    fs.readdir('.', (err, data) => {
        data.forEach(file => {
            if(file[0] !== '.')
                process.stdout.write(file + '\n');
        });
        this.prompt();
    });
};

exports.echo = function(filename) {
    process.stdout.write(filename.join(" "));
    this.prompt();
};

exports.cat = function(filename) {
    fs.readFile(filename, 'utf-8', (err, data) =>{
        process.stdout.write(data);
        this.prompt();
    });
};

exports.head = function(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        let split = data.split('\n');
        process.stdout.write(split.slice(0, 5).join('\n'));
        this.prompt();
    });
};

exports.tail = function(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        let split = data.split('\n');
        process.stdout.write(split.slice(-5).join('\n'));
        this.prompt();
    });
};