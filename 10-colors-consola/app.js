const yargs = require('./config/yargs.js'); //Import yargs package
const colors = require('colors'); //Import colors package
const fs_table = require('../04-exportar-modulo/fs-table-module.js'); //import module for create table file

console.log(yargs.argv)
const base = yargs.argv.base; //Get base value

//Prints the table and generates the file
fs_table.writeTableFilePromise(base)

    .then((res) =>
    {
        const line = "===============================".cyan;
        const title = `${"Tabla del".magenta} ${base.toString().green}`;
        console.log(`${line}\n\t${title}\n${line}`);
        
        const res_split = res.trim().split(/\r\n|\n|\r/);

        res_split.forEach(elem =>
            {
                const item = elem.trim().split(' ');

                console.log(`${colors.magenta(item[0])} ${colors.red(item[1])} ${colors.blue(item[2])} ${colors.yellow(item[3])} ${colors.rainbow(item[4])}`); 
            })
    })
    .catch((err) =>
    {
        throw err;
    });