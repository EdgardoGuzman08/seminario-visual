// definimos nuestro arreglo
let paquetesVendidos = [];

function calcularCosto() {
    // obtenemos los datos que ingresamos al formulario
    let nombre = document.getElementById('nombre').value;
    let destino = document.getElementById('destino').value;
    let fechaIda = new Date(document.getElementById('fecha-ida').value);
    let fechaRegreso = new Date(document.getElementById('fecha-regreso').value);
    let cantidadPersonas = parseInt(document.getElementById('cantidad-personas').value);
    let cantidadAdultos = parseInt(document.getElementById('cantidad-adultos').value);
    let cantidadNinos = parseInt(document.getElementById('cantidad-ninos').value);

    // hacemos el calculo de los lugares sin descuento
    let costo = 0;
    if (destino === 'cortes') {
        costo = 1000;
    } else if (destino === 'ensenada') {
        costo = 1200;
    } else if (destino === 'roatan') {
        costo = 1500;
    }
    costo *= cantidadPersonas;

    // hacemos el respectivo calculo del descuento
    let temporadaBaja = (fechaIda.getMonth() >= 9 || fechaIda.getMonth() <= 2);
    let temporadaAlta = !temporadaBaja;
    let descuento = 0;
    if (temporadaBaja) {
        descuento = 0.15;
        if (cantidadPersonas > 10 && cantidadNinos >= 2) {
        descuento = 0.20;
        }
    } else if (temporadaAlta && cantidadPersonas > 10) {
        descuento = 0.10;
    }
    let descuentoPorcentaje = descuento * 100;
    let costoConDescuento = costo * (1 - descuento);

    // agregamos el paquete a nuestro arreglo
    let paquete = {
        nombre,
        destino,
        fechaIda,
        fechaRegreso,
        cantidadPersonas,
        cantidadAdultos,
        cantidadNinos,
        costo,
        descuentoPorcentaje,
        costoConDescuento
    };
    paquetesVendidos.push(paquete);

    //imprimos los datos en consola
    console.log(paquete);
    console.log(paquetesVendidos);
    //tambien los mostramos en tabla
    // integramos los datos de nuestro paquete a nuestra tabla en el html
    let tabla = document.getElementById('tablaPaquetes');
    let fila = tabla.insertRow();
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = destino;
    fila.insertCell().textContent = fechaIda.toLocaleDateString();
    fila.insertCell().textContent = fechaRegreso.toLocaleDateString();
    fila.insertCell().textContent = cantidadPersonas;
    fila.insertCell().textContent = cantidadAdultos;
    fila.insertCell().textContent = cantidadNinos;
    fila.insertCell().textContent = `Lps${costoConDescuento} (${descuentoPorcentaje}%)`;
}

// generar reporte por temporada alta o baja
function reportePorTemporada() {
    //obtenes el valor de nuestro select opcion
    let temporada = document.getElementById('temporada').value;
    
    // filtramos nuestro arreglo por temporada 
    let paquetesTemporada = paquetesVendidos.filter((paquete) => {
    if (temporada === 'alta') {
    return !(paquete.fechaIda.getMonth() >= 9 || paquete.fechaIda.getMonth() <= 2);
    } else {
    return paquete.fechaIda.getMonth() >= 9 || paquete.fechaIda.getMonth() <= 2;
    }
    });
    
    let tablaReportes = document.getElementById('tablaReportes');
    let tablaReportesBody = tablaReportes.getElementsByTagName('tbody')[0];
    
    // Limpiar la tabla de reportes
    tablaReportesBody.innerHTML = '';
    
    // Si no se encontraron paquetes vendidos en la temporada seleccionada
    if (paquetesTemporada.length === 0) {
    let row = tablaReportesBody.insertRow();
    let cell = row.insertCell();
    cell.colSpan = 8;
    cell.textContent = 'No se encontraron resultados';
    } else {
    // Si se encontraron paquetes vendidos en la temporada seleccionada
    paquetesTemporada.forEach((paquete) => {
    let row = tablaReportesBody.insertRow();
    row.insertCell().textContent = paquete.nombre;
    row.insertCell().textContent = paquete.destino;
    row.insertCell().textContent = paquete.fechaIda.toLocaleDateString();
    row.insertCell().textContent = paquete.fechaRegreso.toLocaleDateString();
    row.insertCell().textContent = paquete.cantidadPersonas;
    row.insertCell().textContent = paquete.cantidadAdultos;
    row.insertCell().textContent = paquete.cantidadNinos;
    row.insertCell().textContent = `Subtotal de Lps${paquete.costo}. Total Lps${paquete.costoConDescuento} descuento de: ${paquete.descuentoPorcentaje}%`;
    });
    }
}
