/*****************************************************************/
/*************FUNCION PARA CREAR FORMULARIO**********************/
/*****************************************************************/
let formulario = document.getElementById('formulario');
const regForm = document.getElementById("registerModal");
formulario.classList.add('bg-color1');
formulario.classList.add('color3');

function crearFormulario() {

    const headerFormR = document.createElement('div');
    headerFormR.innerHTML = `
       <div class="modal-header mb-1">
       <h3 class="modal-title text-center titlesandbtns" id="exampleModalLabel">Completa tus datos</h3>
       <button type="button" class="close color6" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
       </div>
       
`
    const bodyFormR = document.createElement('div');
    bodyFormR.classList.add('modal-body');
    bodyFormR.innerHTML = `
    <div class="formulario_grupo commontexts" id="grupo_nombre">
    <label for"nombre" class="formulario_label"> Nombre</label>
    <div class="formulario_grupo_input">
    <input type="text"  class="formulario_input" name="nombre" id="nombre">
    <i class="formulario_validacion_estado fas fa-times-circle"></i>
    </div>
    <p class="formulario_input_error">El nombre solo puede contener letras</p>
     </div>
<hr>
    <div class="formulario_grupo commontexts" id="grupo_apellido">
    <label for"apellido" class="formulario_label"> Apellido</label>
    <div class="formulario_grupo_input">
    <input type="text"  class="formulario_input" name="apellido" id="apellido">
    <i class="formulario_validacion_estado fas fa-times-circle"></i>
    </div>
    <p class="formulario_input_error">El apellido solo puede contener letras</p>
    </div>
<hr>
<div class="formulario_grupo commontexts" id="grupo_email">
    <label for"email" class="formulario_label"> Email</label>
    <div class="formulario_grupo_input">
    <input type="email"  class="formulario_input" name="email" id="email">
    <i class="formulario_validacion_estado fas fa-times-circle"></i>
    </div>
    <p class="formulario_input_error">El email es invalido</p>
</div>
<hr>
<div class="formulario_grupo commontexts" id="grupo_password">
    <label for"password" class="formulario_label">Contraseña</label>
    <div class="formulario_grupo_input">
    <input type="password"  class="formulario_input" name="password" id="password">
    <i class="formulario_validacion_estado fas fa-times-circle"></i>
    </div>
    <p class="formulario_input_error">La contraseña solo puede contener de 4 a 8 digitos</p>
</div>
<hr>
<div class="formulario_grupo commontexts" id="grupo_password2">
    <label for"password2" class="formulario_label">Repetir contraseña</label>
    <div class="formulario_grupo_input">
    <input type="password"  class="formulario_input" name="password2" id="password2">
    <i class="formulario_validacion_estado fas fa-times-circle"></i>
    </div>
    <p class="formulario_input_error">Ambas contraseñas deben ser iguales</p>
</div>

`

    const footerFormR = document.createElement('div');
    footerFormR.classList.add('modal-footer');
    footerFormR.innerHTML = ` 
    <div class="formulario_mensaje my-2  commontexts" id="formulario_mensaje">
    <p><i class="fas fa-exclamation-triangle"></i><b>Por favor rellena el formulario correctamente.<b> </p>
</div>
<input type="submit" class="btn bg-color2 color3  titlesandbtns" value="Registrarse" id="registerModal" >
<button type="button" class="btn bg-color2 color3 titlesandbtns" data-dismiss="modal" >Cancelar</button>
<p id="formulario_mensaje_exito" class="formulario_mensaje_exito commontexts">Se envio un email a la direccion de correo proporcionada para activar su cuenta!</p>
`
    formulario.appendChild(headerFormR);
    formulario.appendChild(bodyFormR);
    formulario.appendChild(footerFormR);
}

crearFormulario();


/**************************************************************************************************/
/******************************VALIDACIONES********************************************************/
/****************************************************************************************************/
const inputs = document.querySelectorAll('#formulario input');
let letras = /^[A-Z]+$/i; // solo Letras
let passwordv = /^.{4,8}$/; // de 4 a 8 digitos.
let email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; //formato email

// Campos para la validacion  al enviar 
const camposOk = {
    nombre: false,
    apellido: false,
    email: false,
    password: false
}

// Campos para guardar el contenido de los inputs
const camposContenido = {}

//Switch para realizar la validacion todos los inputs
const validarFormulario = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
        case "nombre":
            validarCampo(letras, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(letras, e.target, 'apellido');
            break;
        case "email":
            validarCampo(email, e.target, 'email');
            break;
        case "password":
            validarCampo(passwordv, e.target, 'password');
            /* validarPassword();*/
            break;
        case "password2":
            validarPassword();
            break;
    }
}

//Funcion para validar inputs con expresiones regulares y que no sean campos vacios
const validarCampo = (expresion, input, campo) => {
    if (input.value === "") {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error_activo');
        camposOk[campo] = false;
    } else if (!expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error_activo');
        camposOk[campo] = false;
    } else {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} label`).classList.add('formulario_label_activo');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error_activo');
        camposOk[campo] = true;
        camposContenido[campo] = input.value;
    }
}

// Validar que ambas contraseñas coincidan
const validarPassword = () => {
    console.log('validar password');
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value == inputPassword2.value) {
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_incorrecto');
        document.getElementById(`grupo_password2`).classList.add('formulario_grupo_correcto');
        document.querySelector(`#grupo_password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_password2 label`).classList.add('formulario_label_activo');
        document.querySelector(`#grupo_password label`).classList.add('formulario_label_activo');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.remove('formulario_input_error_activo');
        camposOk['password'] = true;
        console.log('estaa bien');

    } else {

        document.getElementById(`grupo_password2`).classList.add('formulario_grupo_incorrecto');
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_correcto');
        document.querySelector(`#grupo_password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.add('formulario_input_error_activo');
        camposOk['password'] = false;
        console.log('estaa mal');
    }
}

// Recorrer inputs y llamar a funcion para validar cuando se presiona una tecla o se sale del mismo
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});



/****************************************************************************************************/
/******************************GUARDAR DATOS EN EL LOCALSTORAGE**************************************/
/****************************************************************************************************/
/*
function guadarLS(nuevoUsuario) {
    console.log(nuevoUsuario);
    let usuarios = traerUsuariosLS();
    console.log(usuarios);
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function traerUsuariosLS() {
    let usuarios;
    if (localStorage.getItem('usuarios') === null) {
        console.log('estoy en if');
        usuarios = [];
    } else {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
        console.log('estoy en else');
    }
    return usuarios;
}
*/

/***********************************************************************************************************/
/***************************GUARDAR DATOS EN LA FAKE API *****************************************************/
/************************************************************************************************************/

/**Hacer post con el nuevo usuario*/
async function guardarUsuario({ nombre, apellido, email, password, favs, admin }) {
    const url = 'http://localhost:3000/usuarios';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, email, password, favs, admin })
    })
    const nuevoUsuario = await response.json();
    console.log(nuevoUsuario);

}

/**Envio del formulario*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (camposOk.nombre && camposOk.apellido && camposOk.email && camposOk.password) {
        camposContenido.admin = false;
        camposContenido.favs = [];
        //guadarLS(camposContenido);
        guardarUsuario(camposContenido);
        console.log(camposContenido);
        formulario.reset();

        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');
        setTimeout(() => {
            document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo');
        }, 6000);

        document.querySelectorAll('.formulario_grupo_correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo_correcto');
        });
    } else {
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_activo');
        setTimeout(() => {
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje_activo');
        }, 5000);
    }
})