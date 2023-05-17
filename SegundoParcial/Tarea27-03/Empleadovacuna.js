//Edgardo Josue Guzman Piedy 0501200010278

let vacunas = ["Moderna", "Pfizer", "Sinovac", "Astrazeneca"]
let empleados = [
    {codigo: 1, nombre: "Edgardo", apellido: "Guzman", vacuna: "Moderna", dosis: 3},
    {codigo: 2, nombre: "Gabriela", apellido: "Giron", vacuna: "Moderna", dosis: 1},
    {codigo: 3, nombre: "Axel", apellido: "Guzman", vacuna: "Sinovac", dosis: 2},
    {codigo: 4, nombre: "Kixsia", apellido: "Piedy", vacuna: "Astrazeneca", dosis: 1},
    {codigo: 5, nombre: "Rony", apellido: "Murcia", vacuna: "Sinovac", dosis: 2},
    {codigo: 6, nombre: "Luis", apellido: "Garcia", vacuna: "Pfizer", dosis: 3},
    {codigo: 7, nombre: "Ashley", apellido: "Piedy", vacuna: "Astrazeneca", dosis: 2},
    {codigo: 8, nombre: "Jency", apellido: "Madrid", vacuna: "Pfizer", dosis: 1},
]

let seleccionarVacuna = document.getElementById("vacunas");
for (let i = 0; i < vacunas.length; i++) {
    let opciones = document.createElement("option");
    opciones.text = vacunas[i];
    opciones.value = vacunas[i];
    seleccionarVacuna.add(opciones);
}

async function Todasvacunas(){
    let empleadosVacunados = empleados.filter(empleado => empleado.vacuna === seleccionarVacuna.value);
    return empleadosVacunados;
}

async function tablaEmpleados(empleados) {
    let tablaEmpleados = document.getElementById("empleadosinfo");
    tablaEmpleados.innerHTML = "";
    empleados.forEach(empleado => {
        let fila = tablaEmpleados.insertRow();
        let celdaCodigo = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaApellido = fila.insertCell();
        let celdaVacuna = fila.insertCell();
        let celdaDosis = fila.insertCell();

        celdaCodigo.innerHTML = empleado.codigo;
        celdaNombre.innerHTML = empleado.nombre;
        celdaApellido.innerHTML = empleado.apellido;
        celdaVacuna.innerHTML = empleado.vacuna;
        celdaDosis.innerHTML = empleado.dosis;
    });
}

async function buscarEmpleados() {
    let usuariosvacunados = await Todasvacunas();
    let tabla = await tablaEmpleados(usuariosvacunados);
    return tabla;
}

document.getElementById("buscar").addEventListener("click", buscarEmpleados);

