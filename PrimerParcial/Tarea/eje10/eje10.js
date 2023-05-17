let arreglo = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
//todos los datos
console.log(" Datos del arreglo:\n", arreglo.join(", "));
//numeros pares
let par = arreglo.filter(num => num % 2 === 0)
console.log(" Números pares:\n", par.join(", "));
//Mayor que 10 menos que 60
let mayor = arreglo.filter(num => num > 10 && num < 60)
console.log(" Mayores a 10 y Menores a 60:\n", mayor.join(", "));

/*// todos los números en la consola
console.log("Mostrar todos los datos:");
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}
// los números pares
console.log("Números pares:");
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        console.log(arreglo[i]);
    }
}
//  los números mayores que 10 y menores que 60 en la consola
console.log("Mayores que 10 y Menores que 60:");
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 10 && arreglo[i] < 60) {
        console.log(arreglo[i]);
    }
}*/