const yargs = require('./config/yargs.js'); //Import yargs package
const colors = require('colors'); //Import colors package
const fs_table = require('./modules/fs-table.js'); //import module for create table file

const base = yargs.argv.base; //Get base value

//Prints the table and generates the file
fs_table.writeTableFilePromise(base, 20, `./salida/tabla-${base}`)

    .then((res) =>
    {
        const line = "===============================".cyan;
        const title = `${"Tabla del".magenta} ${base.toString().green}`;
        console.log(`${line}\n\t${title}\n${line}\n\n${res}`);
        
    })
    .catch((err) =>
    {
        throw err;
    });
