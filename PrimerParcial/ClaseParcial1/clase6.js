/*alert("Bienvenidos");

    let mensaje = confirm("Desea Ingresar");
    console.log(mensaje);

if(mensaje){
    alert("acceso valido");
    let nombre = prompt("escriba su nombre", "Guest");
    alert("Bienvenido(a) " + nombre)
;}
else{
    alert("acceso bloqueado");
}*/

let mensaje = prompt("Desea Ingresar a o b", "c");
console.log(mensaje);
let opcion;
switch(mensaje){
    case "a":
        opcion=1;
        break;
    case "b":
        opcion=2;
        break;
    case "c":
        opcion=3;
        break;
    default:
        alert("No existe esta opcion")
}

let n1= prompt("ingrese valor 1", 0);
let n2= prompt("ingrese valor 2", 0);
n1 = Number(n1);
n2 = Number(n2);

if(opcion==1){
    let suma = n1+n2;
    alert("el resultado de la suma es " +suma);
;}
else if(opcion==2){
    let resta = n1-n2
    alert("el resultado de la resta es " + resta);
}
else if(opcion==3){
    let multiplicacion = n1*n2
    alert("el resultado de la multiplicacion es " + multiplicacion);
}
else{
    alert("la operacion no existe")
}