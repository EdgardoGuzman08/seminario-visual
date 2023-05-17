let usuarios = [
    {id: 1, nombre: "Edgardo", apellido: "Guzman"},
    {id: 2, nombre: "Josue", apellido: "Piedy"},
    {id: 3, nombre: "Gabriela", apellido: "Giron"}
];

let vehiculos = [
    {id: 1, marca: "Toyota", modelo: "Yaris", idusuario: 1},
    {id: 2, marca: "Ford", modelo: "Ranger", idusuario: 2},
    {id: 3, marca: "Nissan", modelo: "Gtr", idusuario: 3},
    {id: 4, marca: "Ford", modelo: "Raptor", idusuario: 3}
];

// function Busuario(){
//     return new Promise(function(resolve,reject){
//         if(usuarios.length > 0){
//             resolve(usuarios);
//         }
//         else{
//             reject("Usuario no existe");
//         }
//     })
// };

// function usuarioPorId(result, id){
//     return new Promise(function(resolve,reject){
//         let usuario = result.find(user => user.id===id);
//             if(usuario){
//                 resolve(usuario);
//             }
//         reject("Usuario no existe");
//     })
// }


// function verVehiUser(dato){
//     return new Promise(function(resolve,reject){
//         let vehiculosUsuario = vehiculos.filter(vehiculo => vehiculo.idusuario===dato.id);
//         if(vehiculosUsuario){
//             resolve(vehiculosUsuario);
//         }
//         else{
//             reject("Usuario sin vehiculo");
//         }
//     })
// }

// Busuario().then(function(result){
//     return usuarioPorId(result, 3);

// }).then(function(dato){
//     console.log(dato)
//     return verVehiUser(dato);

// }).then(function(vehiculos){
//     console.log(vehiculos);
    
// }).catch(function(err){
//     console.log(err);
// });


function sClientes(){

}

/*desde html caputrar el id del usuario y al evaluar la 
funcion me genere los datos del usuaruio y en una tabla me cargue los vehiculos de ese 
usuario pero si busco otro me limpie la informacion anterior para poner el nuevo y si 
el usuario no existe que muestre un mensaje de que no existe*/

