/* eslint-disable no-console */
import * as mensajes from './Helpers/mensajes.cjs';

console.clear();

const main = async () => {

  try {
    
    const linea = '========================================'.brightMagenta,
      saludo = 'Seleccione una opción'.rainbow.italic.bold;

    console.log('Hola mundo'.cyan);
    console.log(`\n\n${linea}\n\t${saludo}\n${linea}\n`);

    await mensajes.mostrarMenu();
    
  }

  catch (ex){
    console.log(ex.message);
  }
  
};

main();
