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
    links.innerHTML +=`<li class="link" id="admin"><a class="item" href="fullPage.html">Cerrar sesión</a></li>`
}
function removeLinksFromDOM() {
    links.removeChild(login);
    links.removeChild(registro);
}
//Eliminar user de LS
function removeUserFromLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}


/*<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>

<div class="fixed-top">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>

    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>*/