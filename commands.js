var fs = require('fs');

// exports.prompt = function(filename) {
//     process.stdout.write('\nprompt > ');
// };

exports.pwd = function(filename, done) {
    done(process.cwd());
};

exports.date = function(filename, done) {
    done(new Date().toString());
};

exports.ls = function(filename, done) {
    let output = "";
    fs.readdir('.', (err, data) => {
        data.forEach(file => {
            if(file[0] !== '.')
                output += (file + '\n');
        });

        done(output);
    });
};

exports.echo = function(filename, done) {
    done(filename.join(" "));
};

exports.cat = function(filename, done) {
    if (!fs.existsSync(filename)) {
        done(filename + ": File does not exist");
    } else {
        fs.readFile(filename, 'utf-8', (err, data) =>{
            done(data);
        });       
    }
};

exports.head = function(filename, done) {
    if (!fs.existsSync(filename)) {
        done(filename + ": File does not exist");
    } else {
        fs.readFile(filename, 'utf-8', (err, data) => {
            let split = data.split('\n');
            done(split.slice(0, 5).join('\n'));
        });
    }
};

exports.tail = function(filename, done) {
    if (!fs.existsSync(filename)) {
        done(filename + ": File does not exist");
    } else {
        fs.readFile(filename, 'utf-8', (err, data) => {
            let split = data.split('\n');
            done(split.slice(-5).join('\n'));
        });
    }
};