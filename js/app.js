// Crear variables 

// variables con var 
// var nueva = 1;
// console.log(nueva);
// const nueva = 2;
// console.log(nueva);

// let nueva = 3;
// console.log(nueva);

var musica = "Rock";

if (musica) {
    var musica = "Grunge";
    console.log('VAR Dentro del if',musica);
}
console.log('VAR Fuera del if',musica);

let music = "Rock";

if (music) {
    let music = "Grunge";
    console.log('LET Dentro del if',music);
}
console.log('LET Fuera del if',music);

//////////////////////////////////////////////////////////////////
// template strings: ` `

let nombre = "juan";
// la antigua forma
console.log('Nombre ' + nombre);
// la nueva forma 
console.log(`Nombre ${nombre}`);

/////////////////////////////////////////////////////////////////

// La diferencia entre function declaration y function expression es que 
// javascript lee el documento primero y encuentra las funciones declaradas con function declaration
// y estas pueden ser llamadas desde cualquier parte del código aun antes de la línea donde se declara la función llamada
// y con fucntion expression solamente se puede llamar la fucnión en líneas de bajo de donde se declaró

// Function declaration, además de pasar parámetros por default
function saludar(nombre = 'luis') {
    console.log('Function declarations: Hola ' + nombre);
}
saludar('juan');


// Function expresion 
const cliente = function(nombreCliente = 'luis') {
    console.log('Function expression: Hola ' + nombreCliente);
}
cliente('juan');
// al mandar llamar la función sin parámetros se toman los parámetros por default declarados en la función
cliente()

