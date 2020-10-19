'use strict'

const Modal = document.getElementById('Recmodal');
Modal.classList.add('bg-color1');
Modal.classList.add('color3');


const HeaderModal = document.createElement('div');
HeaderModal.innerHTML= `
<div class="modal-header">
<h3 class="modal-title text-center titlesandbtns" id="exampleModalLabel">¿Ha olvidado su contraseña?</h3>
<button type="button" class="close color6" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`
const Recuperarcontraseña = document.createElement('div');
 Recuperarcontraseña.innerHTML = `
 <div class="modal-body commontexts">
  <h4>Ingrese su nombre de usuario o correo electrónico: </h4>
<input  type="email" id="email-rc" class="formulario_input effect" placeholder="Escriba su usuario o Correo" required>
<p id="Mensaje" > </p>
<p id="Mensaje2"> </p>
</div>
`;

const footerRecuperarcontraseña = document.createElement('div');
footerRecuperarcontraseña.innerHTML = `<div class="modal-footer">
<button id="botonmodal" class=" boton_modal  titlesandbtns"  >Obtener una Contraseña nueva</button>
</div>
`


Modal.appendChild(HeaderModal);
Modal.appendChild(Recuperarcontraseña);
Modal.appendChild(footerRecuperarcontraseña);

const email_rc= document.getElementById("email-rc");
const Obtenercontra = document.getElementById("botonmodal");
Obtenercontra.addEventListener("click", User); 


  
async function getUsuarios (){
    const response = await fetch("http://localhost:3000/usuarios")
    const usuarios = await response.json()
    return usuarios
   }

  let mensaje = document.getElementById('Mensaje');
  mensaje.classList.add("font-italic");
  let Mensaje2= document.getElementById('Mensaje2');
  Mensaje2.classList.add("font-italic");
  
  mensaje.innerHTML = ""; 
  Mensaje2.innerHTML="";
  function User(e,usuarios)
  {  
    e.preventDefault();  
    let h=0;
    getUsuarios()
      .then(usuarios => {  
          usuarios.map(usuario => {
          if  ( usuario.email === email_rc.value ){
              h=1;
              console.log(email.value)
              console.log(usuario.email)
             mensaje.innerHTML= `Revise su correo electronico, le enviamos los pasos a seguir para modificar su contraseña` ;
             /* Mensaje2.classList.add('check'); */ 
             Modal.reset();
          } 
        })
          if (h==0){
                  console.log('estoy eb el else',email.value)
                mensaje.innerHTML= `El usuario no se encuentra registrado en nuestra base de datos, por favor <a data-toggle="modal" data-target="#registerModal" href="" > cree una cuenta </a>`;
              } 
     })
 }
   
