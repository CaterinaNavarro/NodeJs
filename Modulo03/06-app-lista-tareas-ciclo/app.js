/* eslint-disable no-console */
import { showMenu, pause } from './Helpers/mensajes.cjs';

console.clear();

const main = async () => {

  try {
    
    let opt = '';
    console.log('Hola mundo'.cyan);

    while (opt !== '0') 
    {
      opt = await showMenu();
      await pause();
    }

    console.log('\nBye bye! =)'.rainbow.italic);

  }

  catch (ex){
    console.err(ex.message);
  }
  
};

main();

