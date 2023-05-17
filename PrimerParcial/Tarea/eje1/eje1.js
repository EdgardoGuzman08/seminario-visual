/*
Intenta modificar la línea const str1 = 42 + "1"; 
para obtener el resultado 43 (sin eliminar las comillas alrededor del 1).
*/
const str = 42 + "1"; //debemos convertir de string a number
const str1 = 42 + Number("1");
console.log(str1); 