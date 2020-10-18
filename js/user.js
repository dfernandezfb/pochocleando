'use strict'

const menuHome = document.querySelector('.menu-home');
const menuUser = document.querySelector('.menu-user');


menuUser.innerHTML = `
<div role="button" class=" btn-user">
<img src=" " width="50" height="50" class="avatar" alt="avatar"></div>
`
const imgAvatar = document.querySelector('.avatar');

showUser();

function showUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.admin === true) {
        menuHome.innerHTML += `<li class="link" id="admin"><a class="item" href="admin.html">ADMIN</a></li>`
        imgAvatar.src = "./img/admin.png";
    } else {
        imgAvatar.src = "./img/user.png";
    }
    menuUser.innerHTML += `
    <div class="lista commontexts p-white">
        <a class="option" href="#">${user.nombre.toUpperCase()}</a>       
        <a class="option" href="error404.html">Editar perfil <i class="pl-3 fas fa-pencil-alt"></i></a>    
        <a class="option" href="error404.html">Configuraciones</a>
        <a class="option " href="error404.html">Ayuda</a>      
        <a class="option" href="fullPage.html"><button class="p-white btn-exit">Cerrar sesión <i class="pl-3 fas fa-sign-out-alt"></i></button></a>
    </div>   
    `
    
}
const lista = document.querySelector('.lista');
const btnExit = document.querySelector('.btn-exit')
const btnUser = document.querySelector('.btn-user')
btnUser.addEventListener('click', showLista);
btnExit.addEventListener('click', removeUserFromLS);

function showLista() {
    if (lista.style.visibility == "hidden") {
        lista.style.visibility = "visible";
    } 
    else lista.style.visibility = "hidden";
}
function removeUserFromLS(user) {
    let user = JSON.parse(localStorage.getItem('user'));
    const favs = JSON.parse(localStorage.getItem('favs'));
    user={
            nombre: user.nombre,
            apellido: user.apellido,
            admin: user.admin,
            id:user.id,
            email:user.email,
            password:user.password,
            favs:favs
        }
    editUser(user.id,user)
    localStorage.removeItem('user');
}

/* ASINCRONO DE BORRADO DE FAVS */
async function editUser(id, newData) {
    const URL = 'http://localhost:3000/usuarios'
    const newURL = `${URL}/${id}`;
    const response = await fetch(newURL, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });
    const data = await response.json();
    return data;
}