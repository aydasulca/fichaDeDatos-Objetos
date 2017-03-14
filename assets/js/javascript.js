window.addEventListener('load',function() {
  var button = document.getElementById('button');
  button.addEventListener('click',function() {
    var nombre = document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var genero= document.getElementById('genero').value;
    var ciudad= document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;

    document.getElementById('datos').innerHTML= "Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;

  });
});
