let tClientes = document.getElementById('tablaCliente');

console.log(tClientes);

function agregarFila(){
    let cCliente = document.getElementById('codigo').value;
    let nCliente = document.getElementById('nombre').value;
    let aCliente = document.getElementById('apellido').value;

    let crearFila = document.createElement('tr');
    let texto = document.createTextNode('');
    crearFila.innerHTML=`<td>${cCliente}</td><td>${nCliente}</td><td>${aCliente}</td><td><button id="bFila" onclick="EliminarDato(this)">Borrar</button></td>`;
    tClientes.appendChild(crearFila);
    document.getElementById('codigo').value="";
    document.getElementById('nombre').value="";
    document.getElementById('apellido').value="";
}

function eliminarFila(){
    let aTabla = document.getElementById('tablaCliente');
    let nuFilas = aTabla.rows.length-1;
    aTabla.deleteRow(nuFilas);
}

function EliminarDato(celda){
    let row = celda.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
}