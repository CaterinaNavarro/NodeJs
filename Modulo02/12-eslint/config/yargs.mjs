/* eslint-disable import/no-unresolved */
const yargs = require('yargs');

const { argv } = yargs
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'number base to generate table',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      demandOption: false,
      describe: 'list the table, set as false by default',
      default: false,
    },
  })
  .check((arg) => {
    const list = arg.listar;
    const { base } = arg;

    if (!list) throw new Error("if you want to see the result you must indicate the optional argument '-l or --listar'");
    if (Number.isNaN(base)) throw new Error('Base must be a number');
    if (base < 1 || base > 20) throw new Error('Base must be between 1 and 20.');
    if (!Number.isInteger(base)) throw new Error('Base must be an integer.');

    return true;
  });

export { argv as default };
