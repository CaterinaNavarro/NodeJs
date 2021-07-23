const fs = require('fs'); 
const colors = require('colors');

// Generate number table
const genMultiplicationTable = (multiplicand, maxMultiplicator = 10) => 
{
    let strTable = "", strTableColors = "";

    if (multiplicand === undefined)
    {
        throw new Error("Argument is missing.");
    }

    if (typeof(multiplicand) !== 'number' || typeof(maxMultiplicator) !== 'number')
    {
        throw new Error("One argument is not a number.");
    }

    if (!Number.isInteger(multiplicand) || !Number.isInteger(maxMultiplicator))
    {
        throw new Error("One argument is not an integer.");
    }

    if (multiplicand < 1 || maxMultiplicator < 1)
    {
        throw new Error("One argument is less than 1");
    }

    for (let i= 1; i <= maxMultiplicator ; i++) 
    {
        strTable = strTable.concat(`${multiplicand} x ${i} = ${multiplicand * i} \n`);
        strTableColors = strTableColors.concat(`${multiplicand.toString().magenta} ${"x".red} ${i.toString().cyan} ${"=".yellow} ${(multiplicand* i).toString().rainbow} \n`);
    }

    return { strTable, strTableColors };
}

// Write a file with the table of numbers
const writeTableFilePromise = (multiplicand, maxMultiplicator = 10, path) =>
{
    const { strTable, strTableColors } = genMultiplicationTable(multiplicand, maxMultiplicator);
    
    return new Promise((resolve, reject) =>
    {
        fs.writeFile(path, strTable, (err) =>
        {
            if (err) reject(err);
            resolve(strTableColors);

        });
    });
}

exports.genMultiplicationTable = genMultiplicationTable;
exports.writeTableFilePromise = writeTableFilePromise;