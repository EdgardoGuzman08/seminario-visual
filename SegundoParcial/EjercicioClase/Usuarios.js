let usuarios = [    
  {id: 1, nombre: "Edgardo", apellido: "Guzman"},    
  {id: 2, nombre: "Josue", apellido: "Piedy"},    
  {id: 3, nombre: "Gabriela", apellido: "Giron"}
];

let vehiculos = [    
  {id: 1, marca: "Toyota", modelo: "Yaris", idusuario: 1},    
  {id: 2, marca: "Ford", modelo: "Ranger", idusuario: 2},    
  {id: 3, marca: "Nissan", modelo: "Gtr", idusuario: 3},    
  {id: 4, marca: "Ford", modelo: "Raptor", idusuario: 3}
];

function Busuario(){
  return new Promise(function(resolve,reject){
      let idUsuario = parseInt(document.getElementById("usuario-id").value);
      if (!isNaN(idUsuario)) {
          let usuario = usuarios.find(user => user.id===idUsuario);
          if(usuario){
              resolve(usuario);
          }
          else{
              reject("Usuario no existe");
          }
      }
  })
  .then(function(usuario){
      document.getElementById("usuario-nombre").value = usuario.nombre || '';
      document.getElementById("usuario-apellido").value = usuario.apellido || '';
      return verVehiculosUser(usuario.id);
  })
  .then(function(vehiculos){
      MVehiculosUsuarios(vehiculos);
  })
  .catch(function(error){
      UsuarioNoExiste(true);
  });
}

// Función para buscar un usuario por ID
function usuarioPorId(id) {
  return new Promise(function(resolve, reject) {
    let usuario = usuarios.find(user => user.id === id);
    if (usuario) {
      resolve(usuario);
    } else {
      reject("Usuario no encontrado");
    }
  });
}

// Función para buscar vehículos por ID de usuario
function verVehiculosUser(idUsuario) {
  return new Promise(function(resolve, reject) {
      let vehiculosUsuario = vehiculos.filter(vehiculo => vehiculo.idusuario===idUsuario);
      if (vehiculosUsuario.length > 0) {
          resolve(vehiculosUsuario);
      } else {
          reject("El usuario no tiene vehículos registrados");
      }
  });
}

function UsuarioNoExiste(mostrar) {
  let mensaje = document.getElementById("mensaje-usuario-no-existe");
  if (mostrar) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
  document.getElementById("usuario-nombre").value = "";
  document.getElementById("usuario-apellido").value = "";
  let tbody = document.querySelector("#tabla-vehiculos tbody");
  while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
  }
}

function limpiarUsuario() {
  document.getElementById("usuario-id").value = "";
  document.getElementById("usuario-nombre").value = "";
  document.getElementById("usuario-apellido").value = "";
  let tbody = document.querySelector("#tabla-vehiculos tbody");
  while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
  }
}

function MVehiculosUsuarios(vehiculos) {
  let tbody = document.querySelector("#tabla-vehiculos tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  for (let i = 0; i < vehiculos.length; i++) {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdMarca = document.createElement("td");
    let tdModelo = document.createElement("td");
    let tdBotonEliminar = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.setAttribute("idusuario", vehiculos[i].idusuario);
    botonEliminar.addEventListener("click", function() {
      let idVehiculo = this.parentNode.parentNode.getAttribute("id").substring(5);
      let filaAEliminar = document.querySelector("#fila-" + idVehiculo);
      if (filaAEliminar) {
        filaAEliminar.remove();
      }
    });
    tdId.innerHTML = vehiculos[i].id;
    tdMarca.innerHTML = vehiculos[i].marca;
    tdModelo.innerHTML = vehiculos[i].modelo;
    tdBotonEliminar.appendChild(botonEliminar);
    tr.setAttribute("id", "fila-" + vehiculos[i].id);
    tr.appendChild(tdId);
    tr.appendChild(tdMarca);
    tr.appendChild(tdModelo);
    tr.appendChild(tdBotonEliminar);
    tbody.appendChild(tr);
  }
}