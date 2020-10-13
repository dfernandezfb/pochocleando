'use strict'
const renderUser = document.getElementById('user');
//renderUser.classList.add('d-flex');
const links = document.querySelector('#links');
const login = document.querySelector('#login');
const registro = document.querySelector('#registro');

let user = {
    nombre: "Romina",
    apellido: "Estrada",
    admin: true,
}

saveUserOnLS(user);
showUser();

function saveUserOnLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}









function showUser() {
    removeLinksFromDOM();
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.admin === true) {
        renderUser.innerHTML = `<div class="d-flex align-content-end flex-wrap">
        <h5 class="p-white"><i class="fas fa-user-cog user-render"></i>¡Bienvenido ${user.nombre}!</h5>
        </div>`
        links.innerHTML += `<li class="link" id="admin"><a class="item" href="pagAdmin.html">Panel Administración</a></li>`
    } else {
        renderUser.innerHTML = `<h5 class="p-white"><i class="fas fa-user user-render"></i>¡Bienvenido ${user.nombre}!<h5>`
    }
    //links.innerHTML +=`<li class="link" id="admin"><a class="item" href="fullPage.html">Cerrar sesión</a></li>`
}
function removeLinksFromDOM() {
    links.removeChild(login);
    links.removeChild(registro);
}
//Eliminar user de LS
function removeUserFromLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
