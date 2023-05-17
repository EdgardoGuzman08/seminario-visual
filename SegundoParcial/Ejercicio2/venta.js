/*dada la siguiente estructura quiero que cuando yo presione el boton de guardar si es credito me muestre
en una lista desordenada producto precio y cantidad y el subtotal si es credito
si es tercera edad y credito que al subtotal se le calcule el 10% de descuento y que lo muestro en una lista desornada osea una etiqueta ul
si tengo el radio de contado presionada quiero que una lista ordenada me muestre lo mismo 
producto precio cantidad subtotal pero el subtotal siendo contado tendra un 20% de descuento
*/

function EjercicioPractica(){
    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
    let credito = document.getElementById('credito').checked;
    let terceraEdad = document.getElementById('tercera_edad').checked;
    let subtotal = precio * cantidad;
    let descuento = terceraEdad && credito ? subtotal * 0.1 : 0;
    let total = subtotal - descuento;

    if (credito) {
        let lista = document.getElementById('listaCredito');
        let item = document.createElement('li');
        item.textContent = `${producto} - Cantidad: ${cantidad} - Precio: ${precio} - Subtotal: ${subtotal}`;
        if (terceraEdad) {
            item.textContent += ` - Total: ${total}`;
        }
        lista.appendChild(item);
    } else {
        let lista = document.getElementById('listaContado');
        let subtotalContado = subtotal * 0.8;
        let item = document.createElement('li');
        item.textContent = `${producto} - Cantidad: ${cantidad} - Precio: ${precio} - Subtotal: ${subtotalContado}`;
        lista.appendChild(item);
    }
}