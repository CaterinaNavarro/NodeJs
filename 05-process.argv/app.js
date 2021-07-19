const fs_table = require('../04-exportar-modulo/fs-table-module.js'); 

let base;

const isNumeric = (value) =>  /^\d+$/.test(value);

const arg = process.argv
    .find((arg) => arg.indexOf("=") > -1 && arg.indexOf(Object.keys({base})[0]) > -1);

    

if (arg && isNumeric(arg.split("=")[1]))
{
    base = parseInt(arg.split("=")[1]);

    fs_table.writeTableFilePromise(base)

    .then((res) =>
    {
        console.log(res);
    })
    .catch((err) =>
    {
        console.log(err);
    });

}

else
{
    console.log(`Invalid operation ${typeof arg === "undefined" ? "there is no argument with that name" : 
                                                                "argument must be a number."}`);                
}




