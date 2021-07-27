/* eslint-disable no-console */
//import { showMenu, pause } from './Helpers/inquirer.js';
import Task from './Models/task.js';
import Tasks from './Models/tasks.js';

console.clear();

const main = async () => {

  try {
    
    // let opt;
    // let confirm;
    // let task = -1;
    // let continueProcess = true;
    
    console.log('Hola mundo'.cyan);

    // while (task !== 0 && continueProcess) 
    // {
    //   opt = await showMenu();
    //   task = opt.task;

    //   if (task !== 0) {
    //     confirm = await pause();
    //     continueProcess = confirm.continueProcess;
    //   }
      
    // }

    const task = new Task('Sacar turno con el médico.');
    console.log('\nTask created');
    console.log(task);

    const tasks = new Tasks();
    console.log('\nTasks created')
    console.log(tasks);

    tasks.list[task.id] = task;
    console.log('\nAdding task to list object of tasks\n$');
    console.log(tasks);

    console.log('\nBye bye! =)'.rainbow.italic);

  }

  catch (ex){
    console.error(ex.message);
  }
  
};

main();

