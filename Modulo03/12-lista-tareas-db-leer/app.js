/* eslint-disable no-console */
import { showMenu, pause, readInput } from './Helpers/inquirer.js';
import Tasks from './Models/tasks.js';
import { openConnDB, closeConnDB, saveDB, readDB, truncateDB } from './Helpers/saveFile.js';
import path from 'path';
import { fileURLToPath } from 'url';

const main = async () => {

  let fileDescriptor = 0;

  try {
    
    const tasksFileName = 'tasks.json';
    const tasks = new Tasks();
    const __filename = fileURLToPath(import.meta.url); // Get current script filepath
    const __dirname = path.dirname(__filename); // Get current script dirname
    const dbPath = path.join(__dirname, './database/'); // set database path
    const TASK_DB_PATH = path.join(dbPath, 'tasks.json');

    let answer, confirm;
    let opt = -1;
    let continueProcess = true;
    
    let arrTasks = [];
    let arrTasksJson;

    console.log('Hola mundo'.cyan);

    await truncateDB(TASK_DB_PATH);
    fileDescriptor = await openConnDB(TASK_DB_PATH);

    while (opt !== 0 && continueProcess) 
    {
      arrTasksJson = await readDB(TASK_DB_PATH);
      answer = await showMenu();
      opt = answer.value;
      
      switch(opt) {

        case 1:
          const taskDescription = await readInput('Descripción: ');
          tasks.createTask(taskDescription.value);
          console.log('Tarea creada!'.rainbow)
          break;
          
        case 2:
          console.log(arrTasksJson);
          break;

        default:
          console.log("No selecciona opcion 1 ni opción 2.");
          break;
          
      }

      arrTasks = tasks.getArrList(); 
      await saveDB(arrTasks, TASK_DB_PATH); //upload task file database
      
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

  finally {
    await closeConnDB(fileDescriptor);
  }
  
};

main();

