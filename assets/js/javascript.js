/*
function Paciente(nombre, apellido, edad, genero, ciudad, pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
}
var arr = [];
*/
window.addEventListener('load',function() {
  var button = document.getElementById('button');
  button.addEventListener('click',function() {
    var nombre = document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var genero= document.getElementById('genero').value;
    var ciudad= document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;

//imprimiendo datos
    function Paciente(nombre, apellido, edad, genero, ciudad, pais){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.genero = genero;
      this.ciudad = ciudad;
      this.pais = pais;
    }
    //var arr = [];

    //var imprimir = new Paciente(nombre, apellido, edad, genero, ciudad, pais);
    //arr.push(imprimir);
    console.log(new Paciente(nombre, apellido, edad, genero, ciudad, pais));
    localStorage.setItem("nuevoPaciente",JSON.stringify(new Paciente(nombre, apellido, edad, genero, ciudad, pais)));
    window.location="fichaPaciente.html";
    var contenedor = document.getElementById('datos');
    //contenedor.innerHTML= "";
    var nuevoContenedor = document.createElement("div");
    var dato = document.createElement("p");
    //dato.innerHTML=  "Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;
    //console.log("Nombre: " + nombre + " " + apellido + "<br>" + "Edad: " + edad + "<br>" + "País: " + pais;)
    nuevoContenedor.appendChild(dato);
    contenedor.appendChild(nuevoContenedor);
  });

//validando solo letras
  var soloLetras = function(e){
    var codigoTecla= e.keyCode;
    //console.log(codigoTecla);
    if((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32){
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    }else{
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite letras";
      return false;
    }
  }

  nombre.onkeypress = soloLetras;
  apellido.onkeypress = soloLetras;
  genero.onkeypress = soloLetras;
  ciudad.onkeypress = soloLetras;
  pais.onkeypress = soloLetras;

  //validando solo numeros
  var soloNumeros = function(e){
    var codigoNumero = e.keyCode;
    //console.log(codigoNumero);
    //if(codigoNumero >= 48 && codigoNumero <= 57){
      if(codigoNumero >= 48 && codigoNumero <= 57 && this.value.length < 2){
      //this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
      this.nextElementSibling.nextElementSibling.innerText="";
      return true;
    }else{
      this.nextElementSibling.nextElementSibling.innerText="*Este campo solo permite números";
      return false
    }
  }

  edad.onkeypress = soloNumeros;



/*
  //var span = document.getElementsByClassName('input-registro')
  var inputs = document.getElementsByClassName('registro');
    //console.log(inputs);
  inputs[0].onblur=function(e){
    if(this.value.trim().length == 0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerText= "*Este campo es obligatorio";
    }
  }
  */
});


  var inputs = document.getElementsByClassName('registro');
    console.log(inputs);
  inputs[0].onblur=function(e){
    if(this.value.trim().length == 0){
      this.value="";
      this.nextElementSibling.nextElementSibling.innerText= "*Este campo es obligatorio";
    }
  }
/*
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var ciudad = document.getElementById('ciudad');
var pais = document.getElementById('pais');
var soloLetras = function(e){
  var codigoTecla= e.keyCode;
  console.log(codigoTecla);
  if((codigoTecla >= 97 && codigoTecla <= 122) || (codigoTecla >= 65 && codigoTecla <= 90) || codigoTecla == 39 || codigoTecla == 32){
    return true;
  }else{
    return false;
  }
}
var soloNumeros = function(e){
  var codigoNumero = e.keyCode;
  console.log(codigoNumero);
  if(codigoNumero >= 124 && codigoNumero <= 57){
    return true;
  }else{
    return false
  }
}

edad.onkeypress = soloNumeros;
nombre.onkeypress = soloLetras;
apellido.onkeypress = soloLetras;
genero.onkeypress = soloLetras;
ciudad.onkeypress = soloLetras;
pais.onkeypress = soloLetras;
*/


/*var cosa = document.getElementById('nombre');
cosa.onkeypress= function(e){
  var codigoTecla = e.keyCode;
  console.log(codigoTecla);
  if(codigoTecla>= 97 && codigoTecla<= 122){
    return true;
  }else {
    return false;
  }
}
*/
