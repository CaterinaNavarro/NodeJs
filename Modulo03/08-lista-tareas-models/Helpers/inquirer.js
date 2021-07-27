import colors from 'colors';
import inquirer from 'inquirer';

const options = [
  'Crear tarea',
  'Listar tareas',
  'Listar tareas completadas',
  'Listar tareas pendientes',
  'Completar tarea(s)',
  'Borrar tarea',
  'Salir'
]

const showMenu = async () => {

  console.clear();

  const lineMessage = '========================================'.brightMagenta,
    messageMenu = 'Seleccione una opción'.rainbow.italic.bold;

  console.log(`${lineMessage}\n\t${messageMenu}\n${lineMessage}\n`); //Show initial message

  return await inquirer.prompt([
  {
    type: 'list',
    name: 'task',
    message: '¿Qué desea hacer?',
    choices : options.map((item, index, self) => {
      if(index === self.length - 1) return { name: `${'0.'.brightYellow}  ${item.italic}`, value: 0 };
      return { name: `${(`${index + 1}.`).toString().brightGreen}  ${item.italic}`, value: index +1 };
    })
  }]);
}

// pause readline until user press enter key
const pause = async () => {
  return await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continueProcess',
      message: '¿Desea continuar?'
    }]);
}

export { showMenu, pause }