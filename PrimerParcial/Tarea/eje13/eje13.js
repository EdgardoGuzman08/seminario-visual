let contacto = [{
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    correo: "Curabitur@nonummyac.co.uk"
    }, {
    nombre: "Raja Villarreal",
    telefono: "0866 398 2895",
    correo: "posuera@sed.com"
    }, {
    nombre: "Helen Richards",
    telefono: "0800 1111",
    correo: "libero@convallis.edu"
}];
let running = true;
while (running) {

    let action = prompt("Presione un numero para realizar una accion(1)\n\n1. Mostrar el primer contacto (primero)\n2. Mostrar el último contacto (último)\n3. Mostrar todos los contactos (todos)\n4. Añadir un nuevo contacto (nuevo)\n5. salir");
    switch (action) {
        //primero
        case "1":
            console.log(`Nombre: ${contacto[0].nombre}\n
            Teléfono: ${contacto[0].telefono}\n
            Correo: ${contacto[0].correo}\n`);
            break;
        //ultimo
        case "2":
            console.log(`Nombre: ${contacto[contacto.length - 1].nombre}\n
            Teléfono: ${contacto[contacto.length - 1].telefono}\n
            Correo: ${contacto[contacto.length - 1].correo}\n`);
            break;
        //todos
        case "3":
            for (let i = 0; i < contacto.length; i++) {
                console.log(`Contacto ${i + 1}:\nNombre: ${contacto[i].nombre}\n
                Teléfono: ${contacto[i].telefono}\n
                Correo: ${contacto[i].correo}\n`);
            }
            break;
        //nuevo
        case "4":
            let nombre = prompt("Ingrese el nombre del contacto:");
            let telefono = prompt("Ingrese el teléfono del contacto:");
            let correo = prompt("Ingrese el correo del contacto:");
            contacto.push({ nombre, telefono, correo });
            console.log("El nuevo contacto ha sido agregado.\n");
            break;
        //salir
        case "5":5
            running = false;
            console.log("Ha salido del programa.");
            break;
        //dato no encontrado
        default:
            console.log("Numero no valido!! Por favor, elija un numero válido.\n");
            break;
    }

}