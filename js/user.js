'use strict'

const menuHome = document.querySelector('.menu-home');
const menuUser = document.querySelector('.menu-user');

let user = {
    nombre: "Romina",
    apellido: "Estrada",
    admin: true,
}
menuUser.innerHTML = `
<button class="navbar-toggler btn-user" style="outline:none;" type="button">
<img src=" " width="50" height="50" class="d-inline-block align-top avatar" alt="avatar" loading="lazy"></button>
</button>
`
const avatar = document.querySelector('.avatar');

saveUserOnLS(user);
showUser();

function saveUserOnLS(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function showUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.admin === true) {
        menuHome.innerHTML += `<li class="link" id="admin"><a class="item" href="admin.html">ADMIN</a></li>`
        avatar.src = "./img/admin.png";
    } else {
        avatar.src = "./img/user.png";
    }
    menuUser.innerHTML += `
    <div class="lista p-white" style="visibility: hidden;" >
        <div><a class="nav-link option p-white" href="#">${user.nombre.toUpperCase()}</a>
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