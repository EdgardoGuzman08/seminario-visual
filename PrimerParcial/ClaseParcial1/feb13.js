let personas=[];
while (true) {
    let _nombre=prompt("Ingrese nombre");
    let _apellido=prompt("Apellido");
    let _edad=prompt("Edad");
    let _genero=prompt("Genero");

    personas.push({
        nombre:_nombre,
        apellidade:_apellido,
        edad:_edad,
        genero:_genero

    })

    console.log(personas);
    //Todo los datos de arreglo
    personas.forEach(element => {
        console.log(element);
    });

}

function Sexo(personas, genero) {
    for (uno of personas) {
        if (uno.genero == genero) {
        console.log(uno);
        }
    }
}
Sexo(personas, "M");
Sexo(personas, "F");


/*//Solo F
for (uno of personas){
    if(uno.sexo=="F"){

        console.log(uno);
    }
    
console.log("------------")////'
//Solo M

}
for (uno of personas){
    if(uno.sexo=="M"){

        console.log(uno);
    }
    
}*/


/*function Saludar(a, b){
    let suma = a+b
    console.log(suma);
    return suma;
    // let numero = 5
    // console.log(numero);
    // return numero
}
let valor = Saludar(3,5)
console.log(valor)

function Saludar(a, b){
    let suma = a+b
    console.log(suma);
    return suma;
    // let numero = 5
    // console.log(numero);
    // return numero
}

function Saludar(a, b){
    let suma = a+b
    console.log(suma);
    return suma;
    // let numero = 5
    // console.log(numero);
    // return numero
}

function Saludar(a, b){
    let suma = a+b
    console.log(suma);
    return suma;
    // let numero = 5
    // console.log(numero);
    // return numero
}*/



// let numero2 = Saludar();
// console.log(numero2);
