/* eslint-disable no-console */
import { showMenu, pause, readInput } from './Helpers/inquirer.js';
import Tasks from './Models/tasks.js'

const main = async () => {

  try {
    
    let answer;
    let confirm;
    let opt = -1;
    let continueProcess = true;
    
    const tasks = new Tasks();

    console.log('Hola mundo'.cyan);

    while (opt !== 0 && continueProcess) 
    {
      answer = await showMenu();
      opt = answer.value;

      switch(opt) {
        case 1:
          const taskDescription = await readInput('Descripción: ');
          tasks.createTask(taskDescription.value);
          console.log('Tarea creada!'.rainbow)
          break;
        case 2:
          tasks.listTasks();
          break;

        default:
          console.log("No selecciona opcion 1 ni opción 2.");
          break;
          
      }
      
      if (opt !== 0) {
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

