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
<input  type="email" id="email" class="formulario_input effect" placeholder="Escriba su usuario o Correo" required>
<p>Este Usuario no se encuentra registrado </p>
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

const email= document.getElementById("email");
const Obtenercontra = document.getElementById("botonmodal");
Obtenercontra.addEventListener("click", getusuarios); 

/* footerRecuperarcontraseña.addEventListener("click",parametros())
function parametros(e) {  
    alert("Verifique su casilla de correo");

} */


function getusuarios() {
    fetch('http://localhost:3000/usuarios')
    .then((response)=>{
        return response.json()
    })

.then((usuarios)=> {
      usuarios.map(usuario => {
          if ( email === `${usuario.email}`) {
            
               alert("usted esta registrado");
              } else { 
               alert("usted no ha sido registrado");
              }
            }) 
            console.log('usuarios');
    })
} 
  

/* 
 const URL= 'http://localhost:3000/usuarios';
async function getUsuarios(){
    const newURL = `${URL}`;
    const response= await fetch(newURL)
    const usuarios= response.json();
    return usuarios
}
getUsuarios() 
.then(usuario => renderEmail(usuario));

function renderEmail(usuario) {
    usuarios.map(usuario => 
        {
            if ( email == `${usuario.email}`) { 
                return alert("verifique su casilla de correo ");
            } else { 
                return alert("usted no ha sido registrado");
            }
        }) 
    } */