let libros = [
    {
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        paginas: 460
    },
    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        paginas: 254
    },
    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        paginas: 352
    }
    ];

    // Agregar un nuevo libro
    libros.push({
        titulo: "Learning JavaScript Design Patterns",
        autor: "Addy Osmani",
        paginas: 254
    });

// Mostrar la longitud del arreglo y los nombres de los libros
console.log(`_____________Longitud del arreglo: ${libros.length}______________`);
console.log("--------------Nombres de los libros---------------");
for (let i = 0; i < libros.length; i++) {
    
    console.log(`Libro:`,libros[i].titulo +  "\nSu pag." + libros[i].paginas);
}

console.log("\n")
    // suma de las paginas de los libros
    let total = 0;
    for (let i = 0; i < libros.length; i++) {
    total += libros[i].paginas;
    }
console.log(`La suma de las páginas del primer array es: ${total}`);

console.log("\n")
// Copiar los dos últimos libros al nuevo arreglo
let lastBooks = libros.slice(-2);

// Eliminar el primer libro
libros.shift();

console.log("\n")
// mostrar el primer dato eliminado mandar a imprimir la longitud y los nombres nuevamente
console.log(`_____________Longitud del arreglo: ${libros.length}______________`);
console.log("--------------Nombres de los libros---------------");
for (let i = 0; i < libros.length; i++) {
console.log(`Libro: `,libros[i].titulo+  "\nSu pag." + libros[i].paginas);
}
console.log("\n")
// suma de las paginas de los libros
let paginatotal = 0;
for (let i = 0; i < libros.length; i++) {
paginatotal += libros[i].paginas;
}
console.log(`La suma de las páginas del segundo array es: ${paginatotal}`);