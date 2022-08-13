### App de Notas 📋✒️
#### El objetivo de esta práctica es armar una app de tareas que permita guardar notas cortas. La app funciona por consola de node js. Para ello utilizé la librería File System y process de Node js.
#### En el archivo 'tareas.js' creé un array de objetos con las tareas. A través del uso de la librería File System, particularmente del método readFileSystem, 'leimos' nuestro 'tareas.json' pasándole el encoding utf-8. Luego en el app.js establecimos la funcionalidad para poder ordenarlas. Teniendo en cuenta si el usuario escribe 'listar', pasa algún dato o escribe cualquier cosa.
#### Importante para ver cómo funciona la app de notas, escribe en consola 'node app', seguido de lo que deseas hacer. Por ejemplo: 'node app listar', esto te mostrará todas las tareas y su estado.

![image](/image.png)