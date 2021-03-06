const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () =>{
  const questions = [
    {
      type:'list',
      name:'opcion',
      message:'¿Qué desea hacer?',
      choices: [{
        value:1,
        name:`${'1'.blue}. Buscar lugar`,
      },{
        value:2,
        name:`${'2'.blue}. Historial`,
      },{
        value:0,
        name:`${'3'.blue}. Salir`,
      }],
    }
  ];
  
  console.clear();
  console.log('========================='.green);
  console.log('     Clima global     ');
  console.log('=========================\n'.green);

  const {opcion} = await inquirer.prompt(questions);
  return opcion;
}

const pausa = async () => {
  const enter = [{
    name:'enter',
    type:'input',
    message:`Presiona ${'ENTER'.green} para continuar`,
  }];
  console.log('\n');
  await inquirer.prompt(enter);
}

const leerInput = async(message)=>{
  const question = [
    {
      type:'input',
      name:'desc',
      message,
      validate(value) {
        if(value.length === 0 ) {
          return 'Por favor ingrese un valor';
        }
        return true;
      }
  }
  ];

  const {desc} = await inquirer.prompt(question);

  return desc;
}

const listadoTareasBorrar= async (tareas=[]) => {
  const choices = tareas.map((tar,i)=>{
    const idx = `${i + 1}`.green;
    return{
      value: tar.id,
      name: `${idx} ${tar.desc}`
    }
    });
    const preguntas = [{
      type:'list',
      name:'id',
      message:'Borrar',
      choices,
    }];
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (msg) => {

  const question = [{
    type:'confirm',
    name:'ok',
    message:msg,
  }]

  const {ok} = await inquirer.prompt(question);
  return ok;

}

const mostrarListadoCheckList = async (tareas=[]) => {
  const choices = tareas.map((tar,i)=>{
    const idx = `${i + 1}`.green;
    return{
      value: tar.id,
      name: `${idx} ${tar.desc}`,
      checked:(tar.completadoEn)?true:false,
    }
    });
    const preguntas = [{
      type:'checkbox',
      name:'ids',
      message:'Seleccione',
      choices,
    }];
    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
}