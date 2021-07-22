const yargs = require('./config/yargs.js'); //Import yargs package
const colors = require('colors'); //Import colors package
const fs_table = require('../04-exportar-modulo/fs-table-module.js'); //import module for create table file

const base = yargs.argv.base; //Get base value

//Prints the table and generates the file
fs_table.writeTableFilePromise(base)

    .then((res) =>
    {
        console.log(res.random.bold);
    })
    .catch((err) =>
    {
        throw err;
    });