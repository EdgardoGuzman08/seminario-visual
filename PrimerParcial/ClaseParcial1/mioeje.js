let sexo = [];
while (true) {
    let salir = confirm("Ingrese un dato");
        if (salir == "") {
            break;
        }

    let nombre = prompt("Ingrese su nombre: ", "");
    if (nombre == "") {
        break;
    }
    let apellido = prompt("Ingrese su apellido: ", "");
    let edad = prompt("Ingrese su edad: ", "");
    let genero = prompt("Ingrese su género (m/f): ", "");

    sexo.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        genero: genero
    });
}
    console.log("Lista de usuarios: ");
    for (let i = 0; i < sexo.length; i++) {
    console.log("sus datos son: " + sexo[i].nombre + " " + sexo[i].apellido + " " + sexo[i].edad);
    }
    let hombres = sexo.filter(sexousuario => sexousuario.genero === "m");
    let mujeres = sexo.filter(sexousuario => sexousuario.genero === "f");
    console.log("Lista de hombres: ");
    console.log(hombres);
    console.log("Lista de mujeres: ");
    console.log(mujeres);