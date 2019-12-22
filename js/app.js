// Crear variables 

// variables con var 
// var nueva = 1;
// console.log(nueva);
// const nueva = 2;
// console.log(nueva);

// let nueva = 3;
// console.log(nueva);

// var musica = "Rock";

// if (musica) {
//     var musica = "Grunge";
//     console.log('VAR Dentro del if',musica);
// }
// console.log('VAR Fuera del if',musica);

// let music = "Rock";

// if (music) {
//     let music = "Grunge";
//     console.log('LET Dentro del if',music);
// }
// console.log('LET Fuera del if',music);

// //////////////////////////////////////////////////////////////////
// // template strings: ` `

// let nombre = "juan";
// // la antigua forma
// console.log('Nombre ' + nombre);
// // la nueva forma 
// console.log(`Nombre ${nombre}`);

// /////////////////////////////////////////////////////////////////

// // La diferencia entre function declaration y function expression es que 
// // javascript lee el documento primero y encuentra las funciones declaradas con function declaration
// // y estas pueden ser llamadas desde cualquier parte del código aun antes de la línea donde se declara la función llamada
// // y con fucntion expression solamente se puede llamar la fucnión en líneas de bajo de donde se declaró

// // Function declaration, además de pasar parámetros por default
// function saludar(nombre = 'luis') {
//     console.log('Function declarations: Hola ' + nombre);
// }
// saludar('juan');


// // Function expresion 
// const cliente = function(nombreCliente = 'luis') {
//     console.log('Function expression: Hola ' + nombreCliente);
// }
// cliente('juan');
// // al mandar llamar la función sin parámetros se toman los parámetros por default declarados en la función
// cliente()

// ////////////// ARROW FUNCTIONS //////////////////////////////////
// let viajando = (destino) => {
//     return `Viajando a ${destino}`;
// }

// let viaje = viajando('paris');
// console.log(viaje);
/////////////////////////////////////////////////////////////////

// Creando objetos /////////////////////////////////////////////
// Objetos literales
// const persona = {
//     nombre: 'Juan',
//     profesion: 'Desarrollo web',
//     edad: 100
// }

// // maneras de acceder a los valores de objetos
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona['edad']);
/////////////////////////////////////////////////////////////////

// Object constructor
// function Tarea (nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }


// const nueva_tarea = new Tarea('Aprender Javascript', 'urgente');

// console.log(nueva_tarea);
// console.log(nueva_tarea.nombre);
/////////////////////////////////////////////////////////////////
// PROTOTYPES
// function Tarea (nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// Tarea.prototype.mostrarInformacionTarea = function(){
//     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// }
// const nueva_tarea = new Tarea('Aprender Javascript', 'urgente');

// console.log(nueva_tarea);
// console.log(nueva_tarea.mostrarInformacionTarea());

/////////////////////////////////////////////////////////////////
// DESTRUCTURING
// const aprendiendoJS = {
//     version: {
//         nueva: 'ES6',
//         anterior: 'ES5'
//     },
//     frameworks: ['React', 'Vue', 'Angular js']
// }

// let {version, frameworks} = aprendiendoJS;

// console.log(version);
// console.log(frameworks);
/////////////////////////////////////////////////////////////////
// // Object literal enhancement
// const banda = 'Metallica';
// const genero = 'Rock';
// const canciones = ['Master on puppets', 'Seek & destroy'];

// // forma anterior de unir variables en un objeto
// // const metallica = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }
// // forma nueva de unir variables en un objeto
// const metallica = {banda, genero, canciones};

// console.log(metallica);
/////////////////////////////////////////////////////////////////
// // funciones en un objeto
// const persona = {
//     nombre: 'juan',
//     trabajo: 'Desarrollo',
//     edad: 500,
//     musica: 'Rock',
//     mostrarInformacion() {
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
//     }
// }

// persona.mostrarInformacion();
/////////////////////////////////////////////////////////////////
// arreglos y .map 
carrito = ['p1', 'p2', 'p3'];

carrito.map(producto => {
    console.log('El producto es ' + producto);
})

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollo',
    edad: 500
}

console.log(Object.keys(persona));