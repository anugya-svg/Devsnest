var fs = require('fs')

var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
    if (val.startsWith('--create'))
        create(val.split('=')[1])
    else if (val.startsWith('--read'))
        read(val.split('=')[1])
    else if (val.startsWith('--update'))
        update(val.split('=')[1])
    else if (val.startsWith('--delete'))
        _delete(val.split('=')[1])
    else console.error('Invalid option')
});

function create(path) {
    fs.writeFile(path, "", (e) => {if(e) console.log(e)});
}

function update(path) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Data ?\n', data => {
        fs.writeFile(path, data, (e) => {if(e) console.log(e)});
        readline.close();
    });
}

function read(path) {
    console.log(fs.readFile(path, 'utf-8', (e) => {if(e) console.log(e)}));

}

function _delete(path) {
    fs.rm(path, (e) => {if(e) console.log(e)});
}