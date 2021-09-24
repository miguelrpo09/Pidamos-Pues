document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

    function validar_usuario(string) {
        //obteniendo el valor que se puso en el campo text del formulario
     var string = document.getElementById("campo2").value;
     var string_inicialMayuscula=string.charAt(0).toUppercase();
     //la condición
     if (string.length == 0 || /^\s+$/.test(string)) {
         alert('Nombre de usuario no puede estar vacio!');
         return false;
        }else if (string.length <= 6 || /^\s+$/.test(string)){
            alert('Nombre de usuario no puede tener menos de 6 caracteres!');
            return false;
        }else if(string.length >= 12 || /^\s+$/.test(string)){
            alert('Nombre de usuario no puede tener mas de 12 caracteres!');
            return false;
        }
        return false;
    }


function validar_contrasena(string){
    var clave = document.getElementById('clave').value;
        if (clave.length < 6) {
          alert('La clave no es válida');
          return;
        }
        this.submit();
      }


module.exports.validar_usuario = validar_usuario;
module.exports.validar_contrasena = validar_contrasena;

