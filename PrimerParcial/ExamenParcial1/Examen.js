
    let productosDisponibles = [
        { nombre: "Arroz", precio: 400, cantidad: 12 },
        { nombre: "Frijoles", precio: 200, cantidad: 10 },
        { nombre: "Queso", precio: 300, cantidad: 8 },
        { nombre: "Tortilla", precio: 50, cantidad: 6 },
        ];
        
    let ventasDelDia = [];
    let Efectivo = [];
    let Tarjeta = [];
    let NoDisponible = [];

        // el while sirve para proceder a una compra o en su defecto la detenemos
        while (true) {
            let opcion = prompt("¿Desea realizar una venta? (S/N)");
        
            if (opcion === "S") {
            procesarVenta();
            } 
            else if (opcion === "N") {
                break;
            }
            else{
                break;
            }
        }

    function procesarVenta() {
        let nombreProducto = prompt("Ingrese el producto que desea comprar: ");
        // Buscamos el producto en el inventario
        let producto = productosDisponibles.find(p => p.nombre === nombreProducto);
        if (!producto) {
            NoDisponible.push(nombreProducto);
            alert("Error producto no esta en stock");
        } 
        else {
            let nombreCliente = prompt("Ingrese su Nombre: ");
            let cantidad = prompt("Ingrese la cantidad que desea comprar: ");
            //convertimos nuestra variable a entero 
            cantidad = parseInt(cantidad);
            if (producto.cantidad < cantidad) {
                NoDisponible.push(nombreProducto +  " - " + nombreCliente +  " - " + cantidad);
                alert("No hay cantidad suficiente en stock");
            } 
            else {
                producto.cantidad -= cantidad;
                let formaPago = prompt("Forma de pago Efectivo/Tarjeta: ");
                let total = producto.precio * cantidad;
                let venta = {
                    nombreCliente: nombreCliente,
                    nombreProducto: nombreProducto,
                    cantidad: cantidad,
                    formaPago: formaPago,
                    total: total
                };
                ventasDelDia.push(venta);
                
                if (formaPago === "Efectivo") {
                    Efectivo.push(venta);
                } 
                else {
                    Tarjeta.push(venta);
                }
            }
        }
    }
        
    // Imprimimos las ventas del dia
    console.log("Ventas totales del día:");
    console.log(ventasDelDia);
    console.log("________________________________________________");
    // Imprimimos las ventas en efectivo
    console.log("Ventas en efectivo:");
    console.log(Efectivo);
    console.log("________________________________________________");
    // Imprimimos ventas con tarjeta
    console.log("Ventas con tarjeta:");
    console.log(Tarjeta);
    console.log("________________________________________________");
    // Imprimimos productos solicitados no disponibles o que no estan en stock
    console.log("Productos no disponibles:");
    console.log(NoDisponible);