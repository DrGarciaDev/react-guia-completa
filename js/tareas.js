export const nombreTarea = 'pasear al perro';

// export default nombreTarea;

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // metodos
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        super.mostrar();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
}

let tarea1 = new Tarea('Aprendiendo javascript', 'Alta');
let tarea2 = new Tarea('Aprendiendo python', 'Alta');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());

let compra1 = new ComprasPendientes('Jabón', 'Urgente', 3);
compra1.mostrar();