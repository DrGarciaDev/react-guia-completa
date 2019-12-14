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