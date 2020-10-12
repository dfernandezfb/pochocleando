'use strict'
const rootAdmin = document.querySelector(".movies-table");
const moviesTable= document.createElement("table");
let idSelected;
moviesTable.classList.add("table","table-hover")
moviesTable.innerHTML=`
<thead class="thead-dark">
<tr>
        <th scope="col">Nombre</th>
        <th scope="col">Director</th>
        <th scope="col">Género</th>
        <th scope="col">Categoría</th>
        <th scope="col">Año</th>
        <th scope="col">Publicada</th>
        <th scope="col">Destacada</th>
        </tr>
        </thead>
        <tbody></tbody>
`;
rootAdmin.appendChild(moviesTable);

async function getMovies()
{
    const URL = 'http://localhost:3000/peliculas'
    const response = await fetch(URL);
    const data= await response.json();
    return data;
}

function generateTable(movies)
{
    movies.map(movie =>{
        const row = document.createElement("tr");
        row.id=movie.id;
        row.innerHTML=`
        <th scope="row">${movie.nombre}</th>
        <td>${movie.director}</td>
        <td>${movie.genero}</td>
        <td>${movie.categoria}</td>
        <td>${movie.año}</td>
        <td>${movie.publicada}</td>
        <td>${movie.destacada}</td>
        `;
        document.querySelector("tbody").appendChild(row);
    })
}

const formE = document.getElementById("rootFormE");
const modalFormE = document.getElementById('editarPeliModal');
formE.classList.add('bg-color1');
formE.classList.add('color3');
function allowButtons(e)
{
    if(document.querySelector(".row-selected")!= null)
    {
        document.querySelector(".row-selected").classList.remove("row-selected");
    }
    e.target.parentElement.classList.add("row-selected");
    document.querySelector(".edit-btn").removeAttribute("disabled")
    idSelected = e.target.parentElement.id;
    getMovie(idSelected)
    .then(movie=>editForm(movie));
}

getMovies()
.then(movies => generateTable(movies));

document.querySelector("tbody").addEventListener("click",allowButtons)





async function getMovie(id) {
    const URL = 'http://localhost:3000/peliculas';
    const newURL= `${URL}/${id}`
    const response = await fetch(newURL);
    const data = await response.json();
    return data;
}

async function editMovie(id,newData){
    const URL = 'http://localhost:3000/peliculas';
    const newURL = `${URL}/${id}`;
    const response = await fetch(newURL,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newData)
    });
    const data = await response.json();
    return data;
}

function createFormE() {
    var modalFormE = document.createElement('div');
    modalFormE.innerHTML = `
<div class="modal-header">
<h5 class="modal-title text-center" id="exampleModalLabel">Editar película</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<div  class="my-1">
<label>Nombre:</label>
<input type=text id=nombreInputE class="formulario_input inputEfect" required >
</div>
<br>
<div  class="my-1">
<label>Descripcion:</label><br>
<textarea id=descripcionInputE class="formulario_input inputEfect" required></textarea>
</div>
<br>
<div  class="my-1">
<label>Genero:</label>
<select id="generoInputE" name="opciones" class="formulario_input_select inputEfect" required>
  <option value="1">Accion</option>
  <option value="2">Drama</option>
  <option value="3">Comedia</option>
  <option value="4">Ciencia ficcion</option>
  <option value="5">Terror</option>
</select>
</div>
<br>
<div class="my-1">
<label class="mr-2">Director:</label>
<input type=text id=directorInputE class="formulario_input inputEfect" required>
</div>
<br>
<div class="my-1">
<label>Categoria:</label>
<input type="text" id=categoriaInputE class="formulario_input inputEfect" required>
</div>
<br>
<div class="my-1">
<label>Año:</label>
<input type="text" id=anioInputE class="formulario_input inputEfect" required>
</div>
<br>
<div class="my-1">
<label>Imagen (link):</label>
<input type="text" id="imagenInputE" class="formulario_input inputEfect" value="" required>
</div>
<br>
<div class="my-1">
<label>Video (link):</label>
<input type="text" id="videoInputE" class="formulario_input inputEfect" value="" required>
</div>
<br>
<div class="custom-control custom-switch form-group form-check my-1">
<input type="checkbox" class="custom-control-input color3" id="publicadaInputE">
<label class="custom-control-label" for="publicadaInputE">Publicada</label>
</div>
<div class="custom-control custom-switch form-group form-check my-1">
<input type="checkbox" class="custom-control-input color3" id="destacadaInputE">
<label class="custom-control-label" for="destacadaInputE">Destacada</label>
</div>
</div>
<div class="modal-footer">
<button  type="submit" class="btn bg-color2 color3 buttonCM">Editar</button>
</div>
`
formE.appendChild(modalFormE);
}
createFormE();


function editForm(movie)
{
    const nombrePeliE = document.getElementById('nombreInputE');
    const descripcionPeliE = document.getElementById('descripcionInputE');
    const directorPeliE = document.getElementById('directorInputE');
    const categoriaPeliE = document.getElementById('categoriaInputE');
    const anioPeliE = document.getElementById('anioInputE');
    const imagenPeliE = document.getElementById('imagenInputE');
    const videoPeliE = document.getElementById('videoInputE');
    const inputCheckE = document.getElementById('publicadaInputE');
    const inputCheckPE = document.getElementById('destacadaInputE');

    nombrePeliE.value = movie.nombre;
    descripcionPeliE.value=movie.descripcion;
    directorPeliE.value=movie.director;
    categoriaPeliE.value=movie.categoria;
    anioPeliE.value=movie.año;
    imagenPeliE.value=movie.imagen;
    videoPeliE.value=movie.video;
    const generos = document.getElementById("generoInputE");
    if(document.querySelector(".gender-selected")!= null)
    {
        document.querySelector(".gender-selected").removeAttribute("selected");
        document.querySelector(".gender-selected").classList.remove("gender-selected");
    }
    for (let i = 0; i < generos.length; i++) {
        if(generos.options[i].text===`${movie.genero}`)
        {
            generos.options[i].setAttribute("selected","");
            generos.options[i].classList.add("gender-selected");
        }
    }
    inputCheckE.checked=movie.publicada;
    inputCheckPE.checked=movie.destacada;
}

formE.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nombrePeliE = document.getElementById('nombreInputE');
    const descripcionPeliE = document.getElementById('descripcionInputE');
    const directorPeliE = document.getElementById('directorInputE');
    const selectGeneroE = document.getElementById("generoInputE");
    const generoPeliE = selectGeneroE.options[selectGeneroE.selectedIndex];
    const categoriaPeliE = document.getElementById('categoriaInputE');
    const anioPeliE = document.getElementById('anioInputE');
    const imagenPeliE = document.getElementById('imagenInputE');
    const videoPeliE = document.getElementById('videoInputE');
    const inputCheckE = document.getElementById('publicadaInputE');
    const inputCheckPE = document.getElementById('destacadaInputE');
    // AGREGAR ID EN EL OBJETO
    const newData = {
        id: idSelected,
        nombre: nombrePeliE.value,
        descripcion: descripcionPeliE.value,
        director: directorPeliE.value,
        genero: generoPeliE.text,
        categoria: categoriaPeliE.value,
        publicada: inputCheckE.checked,
        destacada: inputCheckPE.checked,
        año: anioPeliE.value,
        imagen: imagenPeliE.value,
        video: videoPeliE.value
    };
        editMovie(idSelected,newData)
    })