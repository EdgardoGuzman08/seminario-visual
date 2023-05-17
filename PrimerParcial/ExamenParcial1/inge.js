productos=[
    {nombre:"Arroz",precio:12},
    {nombre:"Azucar",precio:15}
];
ventas=[];
noDisponible=[];
let iniciar = true;
while(iniciar){
      //Consultar  existencia 
        function consultar(nombre){
            let rnombre;
            let rprecio;
            productos.forEach(element => {
                if(element.nombre==nombre){
                    rnombre=element.nombre;
                    rprecio=element.precio;  
                }
            }
            
            );
        
        return {nombrep:nombre,preciop:rprecio};
            
        }
    //fin Consultar
        function compra(){
            let productos =prompt("Que producto desea comprar");
            return productos;
        }
        let buscarp=consultar(compra());

        if (buscarp.preciop != undefined){
            let nCliente=prompt("Cual es su nombre");
            
            let pCantidad=prompt("Cantidad que desea comprar");  
            let pSubtotal=pCantidad*buscarp.preciop;
            let pPago=prompt("Pago 1)Efectivo   2)Tarjeta");

            ventas.push({cliente:nCliente,
                producto:buscarp.nombrep,
                cantidad:pCantidad,
                precio:buscarp.preciop,
                subtotal:pSubtotal,
                pago:pPago
                    
            });
        }
        else
        {
            alert("No Disponibilidad")
            noDisponible.push(buscarp.nombrep);
        }
        let continuar = confirm("Desea realizar otra Venta");
        if (continuar==false){
                break;
        }
        
}

///Detalle de las transacciones
console.log("Ventas Totales");
console.log(ventas);

function ListaVentas(tipo){
        for (tipos of ventas){
            if(tipos.pago==tipo){
        
                console.log(tipos);
            }
        }
    
    };
console.log("Ventas Efectivo");
ListaVentas(1);

console.log("Ventas Tarjeta");
ListaVentas(2);

console.log("Productos no disponibles");
console.log(noDisponible);