// export const nombreTarea = 'pasear al perro';

// // export default nombreTarea;
// export const crearTarea = (tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }

export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // metodos
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    }
}

// let tarea1 = new Tarea('Aprendiendo javascript', 'Alta');
// let tarea2 = new Tarea('Aprendiendo python', 'Alta');

// // console.log(tarea1.mostrar());
// // console.log(tarea2.mostrar());

// let compra1 = new ComprasPendientes('Jabón', 'Urgente', 3);
// compra1.mostrar();