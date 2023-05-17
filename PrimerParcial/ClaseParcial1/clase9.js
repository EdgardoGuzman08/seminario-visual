/*la cual nos va pedir nombre apellido edad y genero masculino y femenino cada vez que 
ingresamos estos datos para estos vamos a evaluar si le damos acepta se repite si 
le damos cancelar que muestra el resultado en una lista una 
lista de masculino y lista de femenino */
/*let arreglo = [];
while(true){

    let nombre = prompt("Escriba su nombre", "");
    let apellido = prompt("Escriba su apellido", "");
    let edad = prompt("Escriba su edad", "");
    let Genero = prompt("Escriba su genero", "");
    let salir= confirm("Desea salir");

    salir ? alert("Ingrese otro usuario") : console.log("cancelado");
    

}*/

//ask a user with prompt then take the information in arrays?



/*let arreglo = [];
while(true){
    let nombre = prompt("Introduzca su nombre: ");
    let apellido = prompt("Introduzca su apellido: ");
    let edad = prompt("Introduce su edad: ");
    let genero = prompt("Introduzca su género (masculino/femenino): ");
      arreglo.push({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      genero: genero,
      });
      console.log(arreglo);
  if (genero === "masculino") {
    console.log("Bienvenido señor " + nombre + " " + apellido + " de " + edad + " años.");
  } else if (genero=== "femenino") {
    console.log("Bienvenida señora " + nombre + " " + apellido + " de " + edad + " años.");
  } else {
    console.log("Bienvenid@ " + nombre + " " + apellido + " de " + edad + " años.");
  }
}*/

let hombre = [];
let mujer = [];
alert("Bienvenido");
while (true) {
  let nombre = prompt("Introduzca su nombre: ");
  if (nombre === null) {
    break;
  }
  let apellido = prompt("introduzca u apellido: ");
  let edad = prompt("Introduzca su edad: ");
  let genero = prompt("Introduzca su género (m/f): ");

    let salir= confirm("Desea salir");

    salir ? alert("Ingrese otro usuario") : console.log("cancelado");

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
  console.log(hombre)
  console.log(mujer)
}

console.log("Lista de hombres: ");
for (let i = 0; i < hombre.length; i++) {
  console.log(hombre[i])
  //console.log(hombre[i].nombre + " " + hombre[i].apellido + " " + hombre[i].edad);
}

console.log("Lista de mujeres: ");
for (let i = 0; i < mujer.length; i++) {
  console.log(mujer[i])
  //console.log(mujer[i].nombre + " " + mujer[i].apellido + " " + mujer[i].edad);
}




