'use strict'

const menuHome = document.querySelector('.menu-home');
const menuUser = document.querySelector('.menu-user');
const admin = document.querySelector('#admin');


menuUser.innerHTML = `
<div role="button" class=" btn-user">
<img src=" " width="100%" height="100%" class="avatar" alt="avatar"></div>
`
const imgAvatar = document.querySelector('.avatar');

showUser();

function showUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.admin === true) {
        admin.innerHTML = `<a class="item" href="admin.html">ADMIN</a>`
        imgAvatar.src = "./img/admin.png";
    } else {
        imgAvatar.src = "./img/user2.png";
    }
    menuUser.innerHTML += `
    <div class="lista commontexts p-white" style="visibility:hidden;">
        <a class="option" href="#">${user.nombre.toUpperCase()}</a>       
        <a class="option" href="error404.html">Editar perfil <i class="pl-3 fas fa-pencil-alt"></i></a>    
        <a class="option" href="error404.html">Configuraciones</a>
        <a class="option " href="error404.html">Ayuda</a>      
        <button class="option p-white btn-exit">Cerrar sesión <i class="pl-3 fas fa-sign-out-alt"></i></button>
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
function removeUserFromLS(e,user) {
    e.preventDefault();
    user = JSON.parse(localStorage.getItem('user'));
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
    localStorage.clear();
    window.location.href = window.location.origin + "/fullPage.html"
    return data;
}