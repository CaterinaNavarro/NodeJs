const colors = require('colors'); //Import colors package
const fs_table = require('../04-exportar-modulo/fs-table-module.js'); //import module for create table file

//Set optional argument and checks values
const argv = require('yargs')
        .options({
            'b' : {
                alias : 'base',
                type: 'number',
                demandOption: true,
                describe: 'number base to generate table'
            },
            'l' : {
                alias : 'listar',
                type: 'boolean',
                demandOption : false,
                describe: 'list the table, set as false by default',
                default: false
            }
        })
        .check((argv) => {

          const list = argv.listar;
          const  base = argv.base;
          
          if (!list) throw new Error("if you want to see the result you must indicate the optional argument '-l or --listar'");
          if (isNaN(base)) throw new Error("Base must be a number");
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

    