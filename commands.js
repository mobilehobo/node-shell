var fs = require('fs');

exports.pwd = function(stdin, filename, done) {
    done(process.cwd() + '\n');
};

exports.date = function(stdin, filename, done) {
    done(new Date().toString() + '\n');
};

exports.ls = function(stdin, filename, done) {
    let output = "";
    fs.readdir('.', (err, data) => {
        data.forEach(file => {
            if(file[0] !== '.')
                output += (file + '\n');
        });

        done(output);
    });
};

exports.echo = function(stdin, filename, done) {
    done(filename.join(" ") + '\n');
};

exports.cat = function(stdin, filename, done) {
    let file = filename[0];
    if (!fs.existsSync(filename[0])) {
        done(filename[0] + ": File does not exist" + '\n');
    } else {
        fs.readFile(filename[0], 'utf-8', (err, data) =>{
            done(data + '\n');
        });       
    }
};

exports.head = function(stdin, filename, done) {
    if(stdin)
    {
        let split = data.split('\n');
        done(split.slice(0, 5).join('\n') + '\n');
    }
    else if (!fs.existsSync(filename[0])) {
        done(filename[0] + ": File does not exist" + '\n');
    } else {
        fs.readFile(filename[0], 'utf-8', (err, data) => {
            let split = data.split('\n');
            done(split.slice(0, 5).join('\n') + '\n');
        });
    }
};

exports.tail = function(stdin, filename, done) {
    if(stdin)
    {
        let split = data.split('\n');
        done(split.slice(-5).join('\n') + '\n');
    }
    if (!fs.existsSync(filename[0])) {
        done(filename[0] + ": File does not exist" + '\n');
    } else {
        fs.readFile(filename[0], 'utf-8', (err, data) => {
            let split = data.split('\n');
            done(split.slice(-5).join('\n') + '\n');
        });
    }
};