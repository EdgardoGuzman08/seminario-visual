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

//asyn await
async function sClientes(id){
    let datosUsuarios = usuarios.find(usuario=> usuario.id===(id));
    return datosUsuarios;

}

async function vehiculosUsuario(usuarioID){
    let listaVehiculos = vehiculos.filter(vehi=>vehi.idusuario===usuarioID);
    return listaVehiculos;
}

async function buscar(){
    const busuarios = await sClientes(3);
    console.log(busuarios);

    let vehUsuario = await vehiculosUsuario(busuarios.id);
    console.log(vehUsuario);
}

buscar()
console.log("Buscando usuarios");

/* quiero un arreglo que controle la vacuna de los empleados  
mediante un procedimiento async quiero que me rellene un option en html que me recupere
las vacunas del covid en un option y que alla un boton de buscar

que se genere dos tablas una para vacunas y otra del empleado
en empleado estara id, nombre, apellido. la vacuna que se aplico y la cantidad de dosis que tiene

me despliegue una tabla de los empleados que tengan esa vacuna
*/