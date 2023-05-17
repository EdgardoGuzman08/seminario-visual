let datoNuevo = document.getElementById('datoNuevo');

let alumno=[{
    codigo:"1",
    nombre:"Pedro",
    apellido:"Perez"
    },
    {
    codigo:"2",
    nombre:"Juan",
    apellido:"Paz"
    }
];

let maestro=[
    {
    codigo:"1",
    nombre:"JDamian",
    apellido:"Sanchez"
    }
    ,
    {
        codigo:"2",
        nombre:"Raul",
        apellido:"Castro"
    }
];

clase=["Matematicas","Ciencias","Artistica","Sociales"];

let notas=[
    {
        alumno:"",
        maestro:"",
        clase:"",
        Nota1:0,
        Nota2:0,
        Nota3:0,
        Promedio:0,
        Observacion:"NN"
    }

]

let cClases=document.getElementById('cuadroClases');


for (let i=0; i<clase.length; i++){

    let elemento = document.createElement('input');
    let etiqueta = document.createElement('label');
    let selecciona=document.createElement('option');
    let textoEtiqueta = document.createTextNode(clase[i]);
    etiqueta.appendChild(textoEtiqueta);
    elemento.type="radio";
    elemento.id=`${String(clase[i])}`;
    elemento.name="Clase";
    elemento.value=`${String(clase[i])}`;
    cClases.append(elemento, etiqueta);

}


function Buscar(){
    let Bradio = document.getElementsByName('Clase');
    console.log(Bradio);
    for(let i=0; i< Bradio.length; i++){
        if(Bradio[i].checked){
            console.log(Bradio[i].value);
        }
    }
}

function agregarClase() {
    let fldsmdfr = document.getElementById('clasenueva').value;
    if (clase.includes(fldsmdfr)) {
        alert('La clase ya existe');
        return;
    }
    clase.push(fldsmdfr);
    let nuevoRadio = document.createElement('input');
    let nuevaEtiqueta = document.createElement('label');
    let nuevoTextoEtiqueta = document.createTextNode(fldsmdfr);
    nuevaEtiqueta.appendChild(nuevoTextoEtiqueta);
    nuevoRadio.type="radio";
    nuevoRadio.id=`${String(fldsmdfr)}`;
    nuevoRadio.name="Clase";
    nuevoRadio.value=`${String(fldsmdfr)}`;
    cClases.append(nuevoRadio, nuevaEtiqueta);
}