'use strict'

const links = document.querySelector('#links');
const login = document.querySelector('#login');
const registro = document.querySelector('#registro');
const menuUser = document.querySelector('.menu-user');

let user = {
    nombre: "Romina",
    apellido: "Estrada",
    admin: true,
}

menuUser.innerHTML = ` <button class="navbar-toggler btn-user" style="outline: none;" type="button">
<img src=" " width="50" height="50" class="d-inline-block align-top avatar" alt="avatar" loading="lazy"></button>`

const imgAvatar = document.querySelector('.avatar');

saveUserOnLS(user);

showUser();

function saveUserOnLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function showUser() {
    removeLinksFromDOM();
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.admin === true) {
        links.innerHTML += `<li class="link" id="admin"><a class="item" href="pagAdmin.html">Panel Administración</a></li>`
        imgAvatar.src = "img/admin.png";
    } else {
        imgAvatar.src = "img/user.png";
    }
    menuUser.innerHTML += `
    <div class="lista p-white" style="visibility: hidden;" >
        <div><a class="nav-link option p-white" href="#">${user.nombre}</a>
        </div>
        <div class="d-inline"><a class="nav-link option p-white" href="error404.html">Editar perfil</a>
        <img class="img-icon" src="img/edit3.png" alt="edit">
        </div>
        <div><a class="nav-link option p-white" href="error404.html">Configuraciones</a>
        </div>
        <div><a class="nav-link option p-white" href="error404.html">Ayuda</a>
        </div>
        <div><a class="nav-link option" href="fullPage.html"><button class="btn-exit p-white" style:"border: none;">Cerrar sesión</button></a>
        </div>
    </div>   
    `
}
const lista = document.querySelector('.lista');
const btnExit = document.querySelector('.btn-exit')
const btnUser = document.querySelector('.btn-user')

btnUser.addEventListener('click', showLista)
btnExit.addEventListener('click', removeUserFromLS);

function removeLinksFromDOM() {
    links.removeChild(login);
    links.removeChild(registro);
}
function showLista() {
    if (lista.style.visibility == "hidden") {
        lista.style.visibility = "visible";
    }else lista.style.visibility="hidden";
}
function removeUserFromLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

