let contacts = [{
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    correo: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    nombre: "Raja Villarreal",
    telefono: "0866 398 2895",
    correo: "posuere.vulputate@sed.com"
    }, {
    nombre: "Helen Richards",
    telefono: "0800 1111",
    correo: "libero@convallis.edu"
    }];
    
    // agregar contacto 
    contacts.push({
    nombre: "Maisie Haley",
    telefono: "0913 531 3030",
    correo: "risus.Quisque@urna.ca"
    });
    
    // Mostrar el primer contacto
    console.log("NOMBRE: " + contacts[0].nombre +
        "\nTELEFONO: " + contacts[0].telefono + 
        "\nCorreo: " + contacts[0].correo);
    
    // Mostrar el último contacto
    let ultimodato = contacts.length - 1;
    console.log("NOMBRE: " + contacts[ultimodato].nombre + 
        "\nTELEFONO: " + contacts[ultimodato].telefono + 
        "\nCorreo: " + contacts[ultimodato].correo);