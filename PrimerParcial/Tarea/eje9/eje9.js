/*Modifica el programa anterior para que le pida al usuario el primer y 
último número a usar en lugar de 100 y 0 (pista: use el cuadro de diálogo prompt). 
Comprueba si los valores  introducidos son correctos (que el valor inicial sea mayor que 
el valor final). */

// Pedir al usuario el primer número
var num1 = parseInt(prompt("Introduzca el primer número:"));

// Pedir al usuario el último número10
var num2 = parseInt(prompt("Introduzca el último número:"));

// Verificar si los valores introducidos son correctos
if (num1 <= num2) {
    console.log("el numero 1 debe ser mayor que el numero 2");
}

// Escribir los números en la consola en pasos de 10
for (var i = num1; i >= num2; i -= 10) {
    console.log(i);
}