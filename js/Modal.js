'use strict'

const modal = document.getElementById('Recmodal');
modal.classList.add('bg-color1');
modal.classList.add('color3');


const headerModal = document.createElement('div');
headerModal.innerHTML= `
<div class="modal-header">
<h3 class="modal-title text-center titlesandbtns" id="exampleModalLabel">¿Ha olvidado su contraseña?</h3>
<button type="button" class="close color6" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`
const recuperarContraseña = document.createElement('div');
recuperarContraseña.innerHTML = `
<div class="modal-body commontexts">
  <h4>Ingrese su nombre de usuario o correo electrónico: </h4>
    <form>
      <input  type="email" id="email-rc" class="formulario_input effect" placeholder="Escriba su usuario o Correo" required>
    </form>
  <p id="Mensaje" > </p>
  <p id="Mensaje2"> </p>
</div>
`;

const footerRecuperarContraseña = document.createElement('div');
footerRecuperarContraseña.innerHTML = `<div class="modal-footer">
<button id="botonmodal" class=" boton_modal  titlesandbtns"  >Obtener una Contraseña nueva</button>
</div>
`


modal.appendChild(headerModal);
modal.appendChild(recuperarContraseña);
modal.appendChild(footerRecuperarContraseña);

const email_rc= document.getElementById("email-rc");
const obtenerContra = document.getElementById("botonmodal");
obtenerContra.addEventListener("click", User); 


  
async function getUsuarios (){
    const response = await fetch("http://localhost:3000/usuarios")
    const usuarios = await response.json()
    return usuarios
   }

  const mensaje = document.getElementById('Mensaje');
  mensaje.classList.add("font-italic");
  const Mensaje2= document.getElementById('Mensaje2');
  Mensaje2.classList.add("font-italic");
  
  mensaje.innerHTML = ""; 
  Mensaje2.innerHTML="";
  function User(e)
  {  
    e.preventDefault();  
    let h=0;
    getUsuarios()
      .then(usuarios => {  
          usuarios.map(usuario => {
          if  ( usuario.email === email_rc.value ){
              h=1;
             mensaje.innerHTML= `Revise su correo electronico, le enviamos los pasos a seguir para modificar su contraseña` ;
             /* Mensaje2.classList.add('check'); */ 
             modal.reset();
          } 
        })
          if (h==0){
                mensaje.innerHTML= `El usuario no se encuentra registrado, por favor <a data-toggle="modal" data-target="#registerModal" href="" > cree una cuenta </a>`;
              } 
     })
 }
   
