/* 
Clase Seminario de Software
Ing Jarvin Calderon

Edgardo Josue Guzman Piedy 0501200010278
David Alberto Garcia Bonilla 0801199918474
Darwin Alejandro Garcia Bonilla 0801199918475

*/

//arreglo alumnos
let Alumnos = [];

//arrelgo de materias 
let Materias = [
    { id: 1, nombre: "Matematicas" },
    { id: 2, nombre: "Español" },
    { id: 3, nombre: "Science" },
    { id: 4, nombre: "Fisica" },
    { id: 5, nombre: "Ciencias Sociales" },
    { id: 6, nombre: "Musica" },
    { id: 7, nombre: "PE" }
];

//arreglo de matriculas
let Matriculas = [];

//arreglo boletas
let boletas=[
    {
        codigo: "",
        alumno:"",
        idMaterias:"",
        nombreMateria:"",
        Nota1:0,
        Nota2:0,
        Nota3:0,
        Promedio:0,
        Observacion:"NN"
    }

]

//agregar las clases al select option en html
let seleccionarClases = document.getElementById("clases");
for (let i = 0; i < Materias.length; i++) {
    let opciones = document.createElement("option");
    opciones.text = Materias[i].nombre;
    opciones.value = Materias[i].id;
    seleccionarClases.add(opciones);
}
/*-------------------------------------------------------------------------------------------------------------------- */

//funcion guardar alumno
async function guardarAlumno(codigo, nombre, apellido) {
    // Verificar si ya existe un alumno con el mismo código o nombre
    let alumnoExistente = Alumnos.find((a) => a.codigo === codigo || (a.nombre === nombre && a.apellido === apellido));
    if (alumnoExistente) {
        alert("Ya existe un alumno con ese código o nombre");
        return null;
    }
    let alumno = { codigo, nombre, apellido };
    Alumnos.push(alumno);
    return alumno;
}
//funcion de btnGuardar Alumno
async function btnGuardar() {
    let codigo = document.getElementById("codigoAlumno").value;
    let nombre = document.getElementById("nombreAlumno").value;
    let apellido = document.getElementById("apellidoAlumno").value;

    if (!codigo || !nombre || !apellido) {
        alert("Por favor, llene todos los campos antes de guardar");
        return;
    }
    //utilizamos nuestra funcion de guardarAlumno mediante el await
    let alumno = await guardarAlumno(codigo, nombre, apellido);
    console.log("Alumno guardado:", alumno);
    limpiarCampos();
    //console.log(Alumnos);
}
/*-------------------------------------------------------------------------------------------------------------------- */
//funcion de buscar alumno
async function buscarAlumno(codigo) {
    let alumno = Alumnos.find((a) => a.codigo === codigo);
    return alumno || null;
}
//funcion de btnBuscar los alumnos
async function btnBuscar() {
    let codigo = document.getElementById("codigoAlumno").value;
    let alumno = await buscarAlumno(codigo);
    if (alumno) {
        console.log("Alumno encontrado:", alumno);
        document.getElementById("nombreAlumno").value = alumno.nombre;
        document.getElementById("apellidoAlumno").value = alumno.apellido;
    } else {
        alert("Alumno no encontrado");
        console.log("Alumno no encontrado");
    }
}
/*-------------------------------------------------------------------------------------------------------------------- */
//funcion de matricular alumno 
async function matricularAlumno() {
    let codigo = document.getElementById("codigoAlumno").value;
    let claseSeleccionada = document.getElementById("clases").options[document.getElementById("clases").selectedIndex].value;

    if (!codigo) {
        alert("Por favor, busque y seleccione un alumno antes de matricular");
        return;
    }

    let alumno = await buscarAlumno(codigo);
    
    if (!alumno) {
        alert("El alumno no existe");
        return;
    }

    let materiaSeleccionada = Materias.find((matri) => matri.id == claseSeleccionada);
    let matriculaExistente = Matriculas.find((matri) => matri.alumno.codigo === alumno.codigo && matri.idMateria === materiaSeleccionada.id);
    if (matriculaExistente) {
        alert("El alumno ya está matriculado en esta materia");
        return;
    }

    let matricula = { alumno, idMateria: materiaSeleccionada.id, nombreMateria: materiaSeleccionada.nombre};
    Matriculas.push(matricula);
    console.log("Alumno matriculado:", matricula);
}

/*-------------------------------------------------------------------------------------------------------------------- */
//funcion de asignarNotas
async function asignarNotas() {
    // Obtener los valores de los campos
    let codigo = document.getElementById("codigoAlumno").value;
    let claseSeleccionada = document.getElementById("clases").options[document.getElementById("clases").selectedIndex].value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    
    // Validar que los campos estén llenos y que las notas sean válidas
    if (!codigo || !claseSeleccionada || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, llene todos los campos con valores numéricos");
        return;
    }
    
    // Buscar la matrícula del alumno en la materia seleccionada
    let matricula = Matriculas.find((m) => m.alumno.codigo === codigo && m.idMateria == claseSeleccionada);
    if (!matricula) {
        alert("El alumno no está matriculado en esta materia");
        return;
    }
    
    // Asignar las notas a la matrícula
    matricula.nota1 = nota1;
    matricula.nota2 = nota2;
    matricula.nota3 = nota3;

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;
        
    matricula.promedio = promedio;
    
    // Determinar si el alumno aprobó o reprobó
    if (promedio >= 70) {
    matricula.observacion = 'aprobado';
    } else {
    matricula.observacion = 'reprobado';
    }
    console.log("Notas asignadas:", matricula);
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
}

/*-------------------------------------------------------------------------------------------------------------------- */
async function generarBoleta() {
    // Obtener la tabla de la boleta
    let tabla = document.getElementById("boleta");

    // Borrar las filas anteriores de la tabla
    while (tabla.rows.length > 1) {
        tabla.deleteRow(-1);
    }

    // Obtener el ID del alumno ingresado por el usuario
    let idAlumno = document.getElementById("codigoAlumno").value;

    // Agregar una nueva fila para cada matrícula con notas asignadas correspondiente al alumno ingresado
    for (let matricula of Matriculas) {
        if (matricula.alumno.codigo === idAlumno && matricula.nota1 !== undefined && matricula.nota2 !== undefined && matricula.nota3 !== undefined) {
            let fila = tabla.insertRow();
            fila.insertCell().textContent = matricula.alumno.codigo;
            fila.insertCell().textContent = `${matricula.alumno.nombre} ${matricula.alumno.apellido}`;
            fila.insertCell().textContent = matricula.idMateria;
            fila.insertCell().textContent = matricula.nombreMateria;
            fila.insertCell().textContent = matricula.nota1;
            fila.insertCell().textContent = matricula.nota2;
            fila.insertCell().textContent = matricula.nota3;
            fila.insertCell().textContent = ((matricula.nota1 + matricula.nota2 + matricula.nota3) / 3).toFixed(2);
            fila.insertCell().textContent = (matricula.nota1 + matricula.nota2 + matricula.nota3) / 3 >= 70 ? "Aprobado" : "Reprobado";
        }
    }
}

/*-------------------------------------------------------------------------------------------------------------------- */
//acciones de los botones en nuestro html
document.getElementById("guardar").onclick = btnGuardar;
document.getElementById("buscar").onclick = btnBuscar;
document.getElementById("btnMatricular").addEventListener("click", matricularAlumno);
document.getElementById("asignarnotas").onclick = asignarNotas;
document.getElementById("consultarBoleta").onclick = generarBoleta;
/*-------------------------------------------------------------------------------------------------------------------- */
//funcion para limpiar todos los campos tambien es utilizado como boton
function limpiarCampos() {
    document.getElementById("codigoAlumno").value = "";
    document.getElementById("nombreAlumno").value = "";
    document.getElementById("apellidoAlumno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    // Obtener la tabla
    let tabla = document.getElementById("boleta");

    // Borrar todas las filas excepto la primera
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}