// Import the filesystem module
const fs = require('fs'); 

const CONSTANT_VALUE = 5;

// Generate number table
const generateTable = (number) => 
{
    let strTable = "";

    for (let i= 1; i <= 10 ; i++) 
    {
        strTable = strTable.concat(`${CONSTANT_VALUE} x ${i} = ${CONSTANT_VALUE * i} \n`);
    }

    return strTable;

}

// Write a file with the table of numbers
const writeTableFile = (number) =>
{
    const strTable = generateTable(number);
    fs.writeFileSync(`tabla-${number}`, strTable, (error, data) =>
    {
        if (error)
        {
            return console.log(error);
        }

        console.log(data);
    })
   
}

writeTableFile(CONSTANT_VALUE);