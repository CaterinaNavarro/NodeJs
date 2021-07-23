const generateTable = (number) =>
{
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
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

generateTable(5);