let sum = (num1, num2) => 
{
    if (num1 === undefined || num2 === undefined)
    {
        throw new Error("Some argument is missing.");
    }
    
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        throw new Error("Some argument is not a number.");
    }

    return num1 + num2;
}

let subtraction = (num1, num2) => 
{
    if (num1 === undefined || num2 === undefined)
    {
        throw new Error("Some argument is missing.");
    }

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        throw new Error("Some argument is not a number.");
    }

    return num1 - num2;
}

var division =  (dividend, divisor) => 
{
    if (dividend === undefined || divisor === undefined)
    {
        throw new Error("Some argument is missing.");
    }

    if (typeof(dividend) !== 'number' || typeof(divisor) !== 'number')
    {
        throw new Error("Some argument is not a number.");
    }

    if (divisor === 0)
    {
        throw new Error("Cannot divide by zero.");
    }

    return dividend / divisor;

}
    
let multiplication = (num1, num2) => 
{
    if (num1 === undefined || num2 === undefined)
    {
        throw new Error("Some argument is missing.");
    }

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        throw new Error("Some argument is not a number.");
    }

    return num1 * num2;
}

//Tests
console.log(sum(10,2));
console.log(subtraction(8,2));
console.log(division(18,6));
console.log(multiplication(5,5));
