/*Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. 
El objeto debe tener tres campos:
estación inicial (el nombre clave es from, y como valor, proporciona 
el nombre de la estación más cercana en tu área)
estación final (el nombre clave es to, y como valor, 
dar cualquier otra estación dentro de 100 km)
el precio del boleto (el nombre clave es price,
y como valor, proporciona la cantidad que te gustaría pagar por este boleto)
El objeto debe crearse usando llaves {}, en los que todos los campos 
se enumerarán inmediatamente. Luego muestra los valores de todos los campos 
del ticket en la consola*/

var ticket = {
    from: "Estación Central",
    to: "Estación Norte",
    price: 10.50
};

// mostrar datos en consola
console.log("Desde: " + ticket.from);
console.log("Hasta: " + ticket.to);
console.log("Precio: " + ticket.price);