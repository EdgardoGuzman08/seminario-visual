/*
Existe un código que actualmente no funciona. Intenta arreglarlo usando solo comentarios
*/

"use strict"; 
const prefix = "username_"; 

/*cuando declaramos una variable con let o const no podemos volver a declararla es
decir debemos cambiar esta variable de nombre o en su defecto cambiar la primera declaracion*/
let userName = "Jack"; 
//-------const userName = "Adam"; 

let prefixedUserName;
//-------const prefixedUserName;  
// mismo error estatmos declarando dos veces la misma variable de diferente manera
// Falta asignar un valor a la variable antes de usarla no le enviamos ningun parametro hasta 
//la linea 21

//variable userName le estamos enviando dos parametros en la linea 10 y en la 20
userName = "John"; 
prefixedUserName = prefix + userName; 

// en esta línea debe imprimir prefixedUserName en lugar de prefixedUserName2 ya que esta
//no esta declarada en todo caso lo que podriamos hacer seria 

// de esta forma estariamos haciendo uso de ambas variables en su defecto 
console.log(prefixedUserName)//prefixedUserName2); 
// La segunda línea debe imprimir prefixedUserName 
console.log(prefixedUserName);