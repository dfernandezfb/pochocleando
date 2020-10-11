'use strict'
const user = document.querySelector('#user');
const links = document.querySelector('#links')
const login = document.querySelector('#login');
const registro = document.querySelector('#registro');



function readUser(user) {
    user = {
        email: user.querySelector('#email').value,
        password: user.querySelector('#password').value,
    }
    if (!(user.email === '' && user.password === '')) {
        saveUserOnLS(user);
    }
}
function saveUserOnLS(element) {
    let user;
    user = getUsersFromLS();
    user.push(element);
    localStorage.setItem('users', JSON.stringify(user));
}

function getUsersFromLS() {
    let users;
    if (localStorage.getItem('users') === null) {
        users = [];
    } else {
        users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
}
function isAdmin() {
    let users = getUsersFromLS();
    users.forEach((user, index) => {
        if (user.tipo === 'administrador') {
            user.innerHTML = "Bienvenido: " + user.nombre;
            user.innerHTML = `
            <i class="fas fa-user-lock"></i>
             `
            links.innerHTMLs = `
             <li class="link" id="admin"><a class="item" href="pagAdmin.html">Administrar</a></li>
              `
        } else {
            user.innerHTML = "Bienvenido: " + user.nombre;
            user.innerHTML = `
            <i class="fas fa-user-lock"></i>
             `
        }
    })
    removeButtonsFromDOM();
}


function removeButtonsFromDOM() {
    links.removeChild(login);
    links.removeChild(registro);
}
//Eliminar user de LS
function removeUserFromLS(removedElement) {
    let usersLS = getUsersFromLS;
    usersLS.forEach((user, index) => {
        if (user.lastName === removedElement) {
            usersLS.splice(index, 1);
        }
    })
    localStorage.setItem('users', JSON.stringify(usersLS));
}
