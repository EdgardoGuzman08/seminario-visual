const arreglo = [];

while (true) {
    let pelicula = prompt("Ingrese el nombre de una película:");
    if (!pelicula) {
        break;
    }

    let imdb = prompt("Ingrese la calificación de IMDB:");
    if (!imdb) {
        break;
    }

    imdb = parseFloat(imdb);
    arreglo.push({pelicula: pelicula, imdb: imdb});
}

console.log("Películas con calificación inferior a 7:");
for (const peliculas of arreglo) {
    if (peliculas.imdb < 7) {
        console.log(`${peliculas.pelicula} (${peliculas.imdb})`);
    }
}

console.log("Películas con calificación superior o igual 7:");
for (const peliculas of arreglo) {
    if (peliculas.imdb >= 7) {
        console.log(`${peliculas.pelicula} (${peliculas.imdb})`);
    }
}
