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
function saveUserOnLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

menuUser.innerHTML = ` <button class="navbar-toggler btn-user" style="outline: none; " type="button">
<img src="ggf.png" width="50" height="50" class="d-inline-block align-top avatar" alt="avatar"
    loading="lazy">
</button>`

const imgAvatar = document.querySelector('.avatar');

saveUserOnLS(user);

showUser();

function showUser() {
    removeLinksFromDOM();
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.admin === true) {
        links.innerHTML += `<li class="link" id="admin"><a class="item" href="pagAdmin.html">Panel Administración</a></li>`
        imgAvatar.src = "img/admin2.png";
    } else {
        imgAvatar.src = "img/user.png";
    }
    menuUser.innerHTML += `<div class="lista d-flex flex-column">
    <div><a class="nav-link active text-white" href="#">${user.nombre}</a>
        <img class="img-edit" src="/img/edit2.png" width="14px" height="14px" alt="edit">
    </div>
        <div><a class="nav-link text-white" href="error404.html">Editar perfil</a>
        </div>
        <div><a class="nav-link text-white" href="error404.html">Configuraciones</a>
        </div>
        <div><a class="nav-link text-white" href="error404.html">Ayuda</a>
        </div>
        <div><a class="nav-link text-white" href="fullPage.html"><button class="btn-exit">Cerrar sesión</button></a>
        </div>
    </div>   
    `
}
const lista = document.querySelector('.lista');
const btnExit = document.querySelector('.btn-exit')
const btnUser = document.querySelector('.btn-user')

btnUser.addEventListener('click', render)
btnExit.addEventListener('click', removeUserFromLS);

function removeLinksFromDOM() {
    links.removeChild(login);
    links.removeChild(registro);
}
function removeUserFromLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
function render() {
    if (lista.style.visibility == "hidden") {
        lista.style.visibility = "visible";
    }
    else
        lista.style.visibility = "hidden"
}


//btnUser.onclick = function render() {


/* CONSULTAR PORQUE NO PUEDO IMPLEMENTAR DE ESTA FORMA
`<button class="navbar-toggler btn-user" style="outline: none; " type="button" onclick="render()">
  <img src ${user.admin===true ? "=/img/admin2.png" : "=/img/user.png"} width="50" height="50" class="d-inline-block align-top" alt="avatar"
      loading="lazy"></button>`
  */
