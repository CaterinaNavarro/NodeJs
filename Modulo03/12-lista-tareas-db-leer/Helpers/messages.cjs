/* eslint-disable no-console */
require('colors'); // import colors package for console

const options = [
  'Crear tarea', 
  'Listar tareas',
  'Listar tareas completadas',
  'Listar tareas pendientes',
  'Completar tarea(s)',
  'Borrar tarea',
  'Salir'
]

// show menu options
const showOptions = () => {
  let strOptions = "", option;

  options.forEach((item, index, self) => {
    if(index === self.length - 1) option = `${'0.'.brightYellow}  ${item.italic}\n`;
    else option = `${(`${index + 1}.`).toString().brightGreen}  ${item.italic}\n`;
    strOptions = strOptions.concat(option);
  });

  console.log(strOptions);

}

// promise ask question and resolve its answer
const ask = (rl, questionText) => {
  return new Promise((resolve, reject) => {
    rl.question(questionText, (input) => resolve(input) );
  });
}

 // check if value is an integer
function isInt(str) {
  return !isNaN(str) && Number.isInteger(parseFloat(str));
}

// validate menu options
const validateOption = (opt) => isInt(opt) && opt >= 0 && opt < options.length 

// shows Menu
const showMenu = async () => {
  
  console.clear();

  //creates input and output type of readline
  const rl =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const lineMessage = '========================================'.brightMagenta,
    messageMenu = 'Seleccione una opción'.rainbow.italic.bold;

  let opt = '';

  console.log(`${lineMessage}\n\t${messageMenu}\n${lineMessage}\n`); //Show initial message

  showOptions();

  while(!validateOption(opt)) opt = await ask(rl, 'Seleccione una opción: ');
    
  return new Promise((resolve, reject) => {
    rl.close();
    resolve(opt);
  });

}

// pause readline until user press enter key
const pause = async () => {
  
  // creates input and output type of readline
  const rl =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let answer = 'initial';

  while(answer.length > 0) answer = await ask(rl, `\nPresione ${'ENTER'.green} para continuar `);
  
  return new Promise ((resolve, reject) => {
    rl.close();
    resolve(answer);
  });

}

module.exports = {
  showMenu,
  pause
}

