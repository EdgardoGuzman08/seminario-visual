// function Primero(){
//     console.log("Primero");
// }

// function Segunda(hola){
//     hola()
//     console.log("Segunda");
// }

// Segunda(Primero)

function Mensaje(){
    console.log("Bienvenidos");
    console.log("Ingresando");
}

// function Tiempo(callback){
//     console.log("Mensaje fuera de tiempo");
//     setTimeout(
//         function()
//         {
//             callback();
//         },
//             4000
//     )
// }
// Tiempo(Mensaje);

// function temporizador(mensaje){
//     let veces = setInterval(mensaje, 1000);
//     setTimeout(
//         function()
//         {
//         clearInterval(veces);
//         },
//         5000
//     )
// }
// temporizador(Mensaje);

// function numero(){
//     console.log("Esto es una funcion");

// }
// numero();

let num = (a) => { return a + 5};
let b = (num(3));
console.log(5)

// let numeros = () =>{
//     return console.log("Esto es una flecha")
// }
// numeros();

// let numeros1 = (nombre, apellido) => console.log("hola " + nombre + " " + apellido);
// numeros1("Edgardo", "Guzman");

// let numeros2 = nombre => console.log("hola " + nombre);
// numeros1("Edgardo");

