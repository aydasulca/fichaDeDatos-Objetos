/*var cuandoSeHagaClick = function{
  var contenedor = document.getElementById('datos');
  var nuevoContenedor = document.createElement("div");
  var dato = "Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;
}*/


window.addEventListener('load',function() {
  var button = document.getElementById('button');
  button.addEventListener('click',function() {
    var nombre = document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var genero= document.getElementById('genero').value;
    var ciudad= document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;


    var contenedor = document.getElementById('datos');
    contenedor.innerHTML= "";
    var nuevoContenedor = document.createElement("div");
    var dato = document.createElement("p");
    dato.innerHTML=  "Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;

    nuevoContenedor.appendChild(dato);
    contenedor.appendChild(nuevoContenedor);

    for(var i = 0 ; i> dato i++){

    }

    //document.getElementById('datos').innerHTML= "Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;

  });
});
