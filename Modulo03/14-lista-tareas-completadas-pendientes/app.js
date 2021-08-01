/* eslint-disable no-console */
import { showMenu, pause, readInput } from './Helpers/inquirer.js';
import Tasks from './Models/tasks.js';
import { openConnDB, closeConnDB, saveDB, readDB, truncateDB } from './Helpers/saveFile.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get full path database
const getFullPath = (filename) => {
  const __filename = fileURLToPath(import.meta.url); // Get current script filepath
  const __dirname = path.dirname(__filename); // Get current script dirname
  const dbPath = path.join(__dirname, './database/'); // set database path
  return path.join(dbPath, filename);
}

const main = async () => {

  let fileDescriptor = 0;

  try {
    
    const tasks = new Tasks();
    const TASK_DB_PATH = getFullPath('tasks.json');

    let answer, confirm;
    let opt = -1;
    let continueProcess = true;
    
    let arrTasks = [];

    console.log('Hola mundo'.cyan);

    await truncateDB(TASK_DB_PATH);
    fileDescriptor = await openConnDB(TASK_DB_PATH);

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
          arrTasks = tasks.fullList();
          if (arrTasks.length > 0) {
            arrTasks.forEach((task, index) => {
              console.log(`${(index + 1).toString().yellow} ${task.desc} :: ${task.state? 'Completada'.green : 'Pendiente'.red}`);
            });
          }
          else
          {
            console.log("Aún no tiene tareas creadas.");
          }
          break;

        case 3:
          arrTasks = tasks.listCompletedTasks();

          if (arrTasks.length > 0) {
            arrTasks.forEach((task, index) => {
              console.log(`${(index + 1).toString().yellow} ${task.green}`);
            });
          }
          else
          {
            console.log("No tiene tareas completadas.");
          }
          break;

        case 4:
          arrTasks = tasks.listCompletedTasks(false);

          if (arrTasks.length > 0) {
            arrTasks = tasks.listCompletedTasks(false);
            arrTasks.forEach((task, index) => {
              console.log(`${(index + 1).toString().yellow} ${task.red}`);
            });
          }
          else
          {
            console.log("No tiene tareas pendientes.");
          }
          break;

        default:
          console.log("Opcion 5, 6 o 0");
          break;
          
      }

      arrTasks = tasks.getArrList();
      await saveDB(arrTasks, TASK_DB_PATH); //upload task file database
      arrTasks = await readDB(TASK_DB_PATH); // Read tasks from db
      tasks.loadTasksFromArray(arrTasks); // load tasks in list
      
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

