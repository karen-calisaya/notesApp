const process = require('process');
const organizacionDeTareas = require('./funcionesDeTareas')
let ordenandoTareas = process.argv[2] && process.argv[2].toLowerCase();

switch (ordenandoTareas){
  case 'listar':
  let misTareasTransformadas = organizacionDeTareas.leerJson()
    for (let i = 0; i < misTareasTransformadas.length; i++){
       console.log( `Tarea: ${misTareasTransformadas[i].titulo} \nEstado: ${misTareasTransformadas[i].estado}`);
         console.log("_______________________ ");
    }
     break;
  case undefined:
    console.log('Atención! Tienes que pasar una acción'); 
     break;
  default:
    console.log('No se que quieres hacer');  
     break;
}


