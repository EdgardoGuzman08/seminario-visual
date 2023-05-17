let arreglo = [];
let generos = { m: [], f: [] };
    
    while (true) {
        let inicio = confirm("Desea seguir ingresando");
        if (inicio == "") {
            break;
        }
    
        let nombre = prompt("Escribe un nombre", "");
        let apellido = prompt("Escribe su apellido", "");
        let edad = prompt("Escribe su edad", "");
        let gen = prompt("Escribe una F o M", "");
    
        if (gen === "m") {
            generos.m.push([nombre, apellido, edad, gen]);
        } else if (gen === "f") {
            generos.f.push([nombre, apellido, edad, gen]);
        }
    }
    
    console.log(generos);

    /*let arreglo = [];
let generos = { m: [], f: [] };

while (true) {
    let inicio = confirm("Desea seguir ingresando");
    if (inicio == "") {
        break;
    }

    let nombre = prompt("Escribe un nombre", "");
    let apellido = prompt("Escribe su apellido", "");
    let edad = prompt("Escribe su edad", "");
    let gen = prompt("Escribe una F o M", "");

    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
    arreglo.push(persona);

    if (gen === "M") {
        generos.m.push(persona);
    } else if (gen === "F") {
        generos.f.push(persona);
    }
}

console.log(generos); */

/* let hombre = [];
let mujer = [];

while (true) {

    let salir = confirm("¿Desea Salir?");

    if (salir) {
        alert("Ingrese otro usuario")
        console.log('datos guardados')
    }
    else {
        console.log('datos cancelados')
    }

    let nombre = prompt("Introduzca su nombre: ", "");
    if (nombre === null) {
        break;
    }
    let apellido = prompt("introduzca u apellido: ", "");
    let edad = prompt("Introduzca su edad: ", "");
    let genero = prompt("Introduzca su género (m/f): ", "");

    if (genero === "m") {
        hombre.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad
        });
    } else if (genero === "f") {
            mujer.push({
            nombre: nombre,
            apellido: apellido,
            edad: edad
            });
        }
}
    
    console.log("Lista de hombres: ");
    for (let i = 0; i < hombre.length; i++) {
    console.log(hombre[i])
    }

    console.log("Lista de mujeres: ");
    for (let i = 0; i < mujer.length; i++) {
    console.log(mujer[i])
    }*/