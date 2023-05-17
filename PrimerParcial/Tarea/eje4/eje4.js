/*
Dada la siguiente estructura 
¿Qué sucede si queremos darle al usuario la posibilidad de ingresar los datos del contacto 
agregado mientras se ejecuta el programa? Modifica el programa para agregar, al final de la lista, 
no el contacto, que se da en el código, sino el que el usuario dará durante la ejecución del 
programa. Usa el método prompt para hacer esto. Al final, muestra el primer y último contacto 
de la lista
*/

let contacts=[]
let nombre = prompt("Ingrese el nombre su contacto");
let telefono = prompt("Ingrese el teléfono su contacto contacto");
let correo = prompt("Ingrese el correo su contacto");

contacts.push({
    nombre: nombre,
    telefono: telefono,
    correo: correo
});

let ultimo = contacts.length - 1;

console.log(`Nombre: ${contacts[0].nombre} \nTelefono: ${contacts[0].telefono} \nCorreo: ${contacts[0].correo}`);
console.log(`Nombre: ${contacts[ultimo].nombre} \nTelefono: ${contacts[ultimo].telefono} \nCorreo: ${contacts[ultimo].correo}`);