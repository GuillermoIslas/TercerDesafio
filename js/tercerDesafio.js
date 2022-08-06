/*Agrupar alumnos de un array por clase*/ 

const alumnos = [
    {  nombre: 'Guillermo', Clase: 'A'},
    {  nombre: 'Facundo', Clase: 'B'},
    {  nombre: 'Juliana', Clase: 'C'},
    {  nombre: 'Marcelo', Clase: 'B'},
    {  nombre: 'Santiago', Clase: 'A'},
    {  nombre: 'Aparicio', Clase: 'C'},
    {  nombre: 'Lucia', Clase: 'C'},
    {  nombre: 'Manuela', Clase: 'B'},
    {  nombre: 'Andres', Clase: 'B'},
    {  nombre: 'Joaquin', Clase: 'A'},
];

let grupos = {};
alumnos.forEach(alumno => {
    const nombreGrupo = alumno.Clase;
    if(!grupos[nombreGrupo]) grupos[nombreGrupo] = [];
    grupos[nombreGrupo].push(alumno);
});

console.log('Grupos', grupos);
