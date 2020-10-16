'use strict'

const menuHome = document.querySelector('.menu-home');
const menuUser = document.querySelector('.menu-user');

let user = {
    nombre: "Romina",
    apellido: "Estrada",
    admin: true,
}

menuUser.innerHTML = `
<div role="button" class=" btn-user" tabindex="0" style="outline: none;">
<img src=" " width="50" height="50" class="d-inline-block align-top avatar" alt="avatar" loading="lazy"></div>
`
const imgAvatar = document.querySelector('.avatar');

saveUserOnLS(user);

showUser();

function saveUserOnLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function showUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.admin === true) {
        menuHome.innerHTML += `<li class="link" id="admin"><a class="item" href="admin.html">ADMIN</a></li>`
        imgAvatar.src = "img/admin.png";
    } else {
        imgAvatar.src = "img/user.png";
    }
    menuUser.innerHTML += `
    <span class="lista" role="button" tabindex="0" style="visibility: hidden;" >
        <div class="items-user "><a class="option p-white" href="#">${user.nombre.toUpperCase()}</a>
        </div>
        <div class="items-user"><a class="option p-white" tabindex="0" href="error404.html">Editar perfil <i class="pl-3 fas fa-pencil-alt"></i></a>
        </div>
        <div class="items-user"><a class="option p-white" href="error404.html">Configuraciones</a>
        </div>
        <div class="items-user"><a class="option p-white" href="error404.html">Ayuda</a>
        </div>
        <div class="items-user"><a class="option" href="fullPage.html"><button class="btn-exit p-white" style:"border: none;">Cerrar sesión <i class="pl-3 fas fa-sign-out-alt"></i></button></a>
        </div>
    </span>   
    `
    
}
const lista = document.querySelector('.lista');
const btnExit = document.querySelector('.btn-exit')
const btnUser = document.querySelector('.btn-user')
btnUser.addEventListener('click', showLista)
btnExit.addEventListener('click', removeUserFromLS);

function showLista() {
    if (lista.style.visibility == "hidden") {
        lista.style.visibility = "visible";
    } 
    else lista.style.visibility = "hidden";
}
function removeUserFromLS(user) {
    localStorage.removeItem('user');
}
