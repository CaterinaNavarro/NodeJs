/* eslint-disable no-console */
import { showMenu, pause } from './Helpers/inquirer.js';

console.clear();

const main = async () => {

  try {
    
    let opt;
    let confirm;
    let task = -1;
    let continueProcess = true;
    

    console.log('Hola mundo'.cyan);

    while (task !== 0 && continueProcess) 
    {
      opt = await showMenu();
      task = opt.task;

      if (task !== 0) {
        confirm = await pause();
        continueProcess = confirm.continueProcess;
      }
      
    }

    console.log('\nBye bye! =)'.rainbow.italic);

  }

  catch (ex){
    console.error(ex.message);
  }
  
};

main();

