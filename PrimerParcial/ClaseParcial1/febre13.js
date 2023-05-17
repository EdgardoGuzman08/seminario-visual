let personas=[];

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

function Sexo(personas, genero) {
    for (sexo of personas) {
        if (sexo.genero == genero) {
        console.log(sexo);
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
