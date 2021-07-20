const yargs = require('yargs/yargs');  //Import yargs package
const { hideBin } = require('yargs/helpers') //Shorthand for process.argv.slice(2)
const argv = yargs(hideBin(process.argv)).argv

console.log(argv); //print args