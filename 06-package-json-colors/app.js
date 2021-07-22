//import module for create table file
const fs_table = require('../04-exportar-modulo/fs-table-module.js');

//import colors package
const colors = require('colors');

let base, title, first;

//Determine if value is an integer 
const isNumeric = (value) =>  /^\d+$/.test(value);

//Get arguments and check values
const args = process.argv
    .filter((arg) => arg.indexOf("=") > -1 && (
        (arg.indexOf(Object.keys({base})[0]) > -1 &&  isNumeric(arg.split("=")[1]) && parseInt(arg.split("=")[1]) > 0) || 
        (arg.indexOf(Object.keys({title})[0]) > -1 &&  arg.split("=")[1])) );


//Get base value
if (args && args.find((arg) => arg.indexOf(Object.keys({base})[0]) > -1))
{
    first = args.find((arg) => arg.indexOf(Object.keys({base})[0]) > -1);
    base = parseInt(first.split("=")[1]);
}

else
{
    throw Error("Argument base is incorrect.");
}

//Get title value
if (args && args.find((arg) => arg.indexOf(Object.keys({title})[0]) > -1))
{
    first = args.find((arg) => arg.indexOf(Object.keys({title})[0]) > -1);
    title = first.split("=")[1];
}

else
{
    throw Error("Argument title is incorrect.");
}

//Generate and print the table
fs_table.writeTableFilePromise(base)

    .then((res) =>
    {
        console.log(`\n${title}\n \n${res}`.rainbow);
    })
    .catch((err) =>
    {
        throw err;
    });

