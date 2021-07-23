// Import the filesystem module
const fs = require('fs'); 

// Generate number table
const generateTable = (number) => 
{
    let strTable = "";

    if (number === undefined)
    {
        throw new Error("Argument is missing.");
    }

    if (typeof(number) !== 'number')
    {
        throw new Error("Argument is not a number.");
    }

    for (let i= 1; i <= 10 ; i++) 
    {
        strTable = strTable.concat(`${number} x ${i} = ${number * i} \n`);
    }

    return strTable;

}

// Write a file with the table of numbers
const writeTableFile = (number) =>
{
    if (number === undefined)
    {
        throw new Error("Argument is missing.");
    }

    if (typeof(number) !== 'number')
    {
        throw new Error("Argument is not a number.");
    }
    
    const data = generateTable(number);
    
    fs.writeFileSync(`tabla-${number}`, data, (error) =>
    {
        if (error)
        {
            return console.log(error);
        }

        console.log(data);
    })
   
}

writeTableFile(5);