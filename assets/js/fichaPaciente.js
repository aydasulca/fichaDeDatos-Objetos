window.onload=function(){
  var nombre = document.getElementById('ficha-nombre');
  var apellido = document.getElementById('ficha-apellido');
  var edad = document.getElementById('ficha-edad');
  var genero = document.getElementById('ficha-genero');
  var ciudad = document.getElementById('ficha-ciudad');
  var pais = document.getElementById('ficha-pais');
  var boton = document.getElementById('boton-editar');

  var paciente = JSON.parse(localStorage.getItem("nuevoPaciente"));

  nombre.innerHTML= paciente.nombre;
  apellido.innerHTML = paciente.apellido;
  edad.innerHTML = paciente.edad;
  genero.innerHTML = paciente.genero;
  ciudad.innerHTML = paciente.ciudad;
  pais.innerHTML = paciente.pais;
};
