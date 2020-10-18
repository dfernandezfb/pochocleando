// Login

const formToLogin = document.getElementById("rootLog");
const loginForm = document.getElementById("loginModal")
formToLogin.classList.add('bg-color1');
formToLogin.classList.add('color3');


function crear() {
    const headerFormL = document.createElement('div');
    headerFormL.innerHTML = `
<div class="modal-header">
<h3 class="modal-title text-center titlesandbtns" id="exampleModalLabel">Iniciar Sesión</h3>
<button type="button" class="close color6" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>

</button>
</div>
`;
    const bodyFormL = document.createElement('div');
    bodyFormL.innerHTML = `
    <div class="modal-body commontexts">
    <label>Email</label>
    <br>
    <input class="email formulario_input" type="email" id="emaill">
    <div id="warning-email"></div>
    <br>
    <label>Password</label>
    <br>
    <input class="password formulario_input" type="password" id="passwordl">
    <div id="warning-pass"></div>
    <br>
    <div id="warning"></div>
    </div>
`;
    const footerFormL = document.createElement('div');
    footerFormL.innerHTML = `<div class="modal-footer">
    <button type="submit" class="btn bg-color2 color3  aceptar titlesandbtns" id="loginModal">Ingresar</button>
    <button type="button" class="btn bg-color2 color3  titlesandbtns" data-dismiss="modal">Cancelar</button>
    </div>
`;

    formToLogin.appendChild(headerFormL);
    formToLogin.appendChild(bodyFormL);
    formToLogin.appendChild(footerFormL);

}
crear();


const usuario = document.querySelector('#emaill');
const pass = document.querySelector('#passwordl');
const pWarn = document.querySelector('#warning-pass');
const eWarn = document.querySelector('#warning-email');

const alert = document.createElement('div');
alert.innerText = '';
pWarn.classList.add("font-italic");
pWarn.appendChild(alert);

const alert2 = document.createElement('div');
alert2.innerText = '';
eWarn.classList.add("font-italic");
eWarn.appendChild(alert2);

formToLogin.addEventListener("submit", e => {
    e.preventDefault()
    let warningP = ""
    let warningE = ""
    let entrarP = false
    let entrarE = false
    let Email = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    pWarn.innerHTML = ""
    eWarn.innerHTML = ""

    if (!Email.test(usuario.value)) {
        warningE += `El email no es válido <br>`
        entrarE = true

    }
    if (pass.value.length < 8) {
        warningP += `La contraseña no es válida`
        entrarP = true
    }



    if (entrarE) {
        eWarn.innerHTML = warningE

    }
    if (entrarP) {
        pWarn.innerHTML = warningP
    }
    if (entrarP != true && entrarE != true) {
        getUsuarios()
            .then(usuarios => checkUser(usuarios))
    }

})

async function getUsuarios() {
    const response = await fetch("http://localhost:3000/usuarios")
    const data = await response.json()
    return data
}

const warn = document.getElementById('warning');
warn.classList.add("font-italic");

function checkUser(usuarios) {
    let y = 0
    warn.innerHTML = ""
    usuarios.map(usuarioS=> {
        if (usuario.value === usuarioS.email && pass.value === usuarioS.password) {

            const user = {
                nombre: usuarioS.nombre,
                apellido: usuarioS.apellido,
                admin: usuarioS.admin,
                id:usuarioS.id,
                email:usuarioS.email,
                password:usuarioS.password,
                favs:usuarioS.favs
            }
            const favs = usuarioS.favs
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("favs", JSON.stringify(favs))
            y = 1
            window.location.href = window.location.origin + "/index.html"
    }


    })
    if (y === 0) {
        warn.innerHTML = `Los datos ingresados no coinciden con nuestros registros`;
    }





}