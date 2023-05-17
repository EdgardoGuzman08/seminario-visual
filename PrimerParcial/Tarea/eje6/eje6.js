// Preguntar al usuario sobre el ancho, alto y largo de la caja
var width = parseFloat(prompt("Introduzca el ancho: "));
var height = parseFloat(prompt("Introduzca la altura: "));
var length = parseFloat(prompt("Introduzca el largo: "));

// Calcular el volumen de la caja
var volumen = width * height * length;

// Mostrar el volumen de la caja al usuario
alert("El volumen de la caja es: " + volumen);
