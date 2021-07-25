/* eslint-disable no-console */
const colors = require('colors');

const inquirer = require('inquirer');

const opciones = [
  'Crear tarea',
  'Listar tareas',
  'Listar tareas completadas',
  'Listar tareas pendientes',
  'Completar tarea(s)',
  'Borrar tarea',
  'Salir'
]

const mostrarMenu = async () => 
  
await inquirer.prompt([
  {
    type: 'list',
    name: 'tareas',
    message: '¿Qué desea hacer?',
    choices : opciones.map((item, index, self) => {
      if(index === self.length - 1) return `${'0.'.brightYellow}  ${item.italic}`;
      return `${(`${index + 1}.`).toString().brightGreen}  ${item.italic}`;
    })
  }
]);
  

exports.mostrarMenu = mostrarMenu;
