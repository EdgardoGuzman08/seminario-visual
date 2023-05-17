let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: "MARENO"
    };
    
    for(let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
    }