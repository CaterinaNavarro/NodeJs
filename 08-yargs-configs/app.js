var colors = require('colors'); //Import colors package
const fs_table = require('../04-exportar-modulo/fs-table-module.js'); //import module for create table file

//Set optional argument and checks values
const argv = require('yargs/yargs')(process.argv.slice(2))
        .alias('l', 'listar')
        .describe('l', 'list the table, set as false by default.')
        .boolean('l')
        .check((argv) => {

          const list = argv.listar;
          const  base = argv.base;

          if (!list) throw new Error("if you want to see the result you must indicate the optional argument '-l'");
          if (list && typeof base === "undefined") throw new Error("Base is undefined");
          if (typeof base !== "number") throw new Error("Base must be a number");
          if (base < 1 || base > 20) throw new Error("Base must be between 1 and 20.");
          if (!Number.isInteger(base)) throw new Error("Base must be an integer.");

          return true;

        })
        .argv

//Prints the table and generates the file
fs_table.writeTableFilePromise(argv.base)

    .then((res) =>
    {
        console.log(res.rainbow);
    })
    .catch((err) =>
    {
        throw err;
    });

    