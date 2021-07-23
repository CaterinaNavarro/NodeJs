import argv from './config/yargs'; // Import yargs package
import { writeTableFilePromise } from './modules/fs-table'; // import module for create table file

const { base } = argv; // Get base value

// Prints the table and generates the file
writeTableFilePromise(base, 20, `./salida/tabla-${base}`)

  .then((res) => {
    const line = '==============================='.cyan;
    const title = `${'Tabla del'.magenta} ${base.toString().green}`;
    // eslint-disable-next-line no-console
    console.log(`${line}\n\t${title}\n${line}\n\n${res}`);
  })
  .catch((err) => {
    throw err;
  });
