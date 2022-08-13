//lectura de archivo json

const fs = require('fs');

let organizacionDeTareas = {
    leerJson: function (){
    let misTareas = fs.readFileSync('./tareas.json', 'utf-8');
    let misTareasTransformadas = JSON.parse(misTareas);
    return misTareasTransformadas
    }
}

module.exports = organizacionDeTareas





//, (error, dato) => !error ? console.log(dato) : console.log(error)