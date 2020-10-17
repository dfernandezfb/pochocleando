const formE = document.getElementById("rootFormE");
const modalFormE = document.getElementById('editarPeliModal');
form.classList.add('bg-color1');
form.classList.add('color3');

async function getMovie(id) {
    const URL = 'http://localhost:3000/peliculas/';
    const newURL = `${URL}/${id}`
    const response = await fetch(newURL);
    const data = await response.json();
    return data;
}

async function editMovie(id, newData) {
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

function editForm(movie) {
    const headerFormE = document.createElement('div');
    headerFormE.innerHTML = `
<div class="modal-header">
<h5 class="modal-title text-center" id="exampleModalLabel">Editar pelicula</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`
    const bodyFormE = document.createElement('div');
    bodyFormE.innerHTML = `
 <div class="modal-body">
<label>Nombre:</label>
<input type="text" id="nombreInputE" class="campos" value="${movie.nombre}" required >
<br>
<label>Descripcion:</label><br>
<textarea id="descripcionInputE" class="campos" required>${movie.descripcion}</textarea>
<br>
<label>Genero:</label>
<select id="generoInputE" name="opciones" class="campos" required>
<option value="1">Accion</option>
<option value="2">Drama</option>
<option value="3">Comedia</option>
<option value="4">Ciencia ficcion</option>
<option value="5">Suspenso</option>
<option value="6">Terror</option>
  </select>
  <br>
  <br>
  <label class="mr-2">Director:</label>
  <input type=text id="directorInputE" class="campos" value="${movie.director}" required>
  <br>
<label>Categoria:</label>
<input type="text" id="categoriaInputE" class="campos" value="${movie.categoria}" required>
<br>
<label>Año:</label>
<input type="text" id="anioInputE" class="campos" value="${movie.año}" required>
<br>
<label>Imagen (link):</label>
<input type="text" id="imagenInputE" class="campos" value="${movie.imagen}" required>
<br>
<label>Video (link):</label>
<input type="text" id="videoInputE" class="campos" value="${movie.video}" required>
<br>
<div class="custom-control custom-switch form-group form-check">
<input type="checkbox" class="custom-control-input" id="publicadaInputE">
<label class="custom-control-label" for="publicadaInputE">Publicada</label>
</div>
</div>
`;
    const footerFormE = document.createElement('div');
    footerFormE.innerHTML = `<div class="modal-footer">
<button type="submit" class="btn bg-color2 color3">Guardar</button>
</div>
`
    formE.appendChild(headerFormE);
    formE.appendChild(bodyFormE);
    formE.appendChild(footerFormE);
    const generos = document.getElementById("generoInputE").options;
    let inputCheckE = document.getElementById("publicadaInputE");
    for (let i = 0; i < generos.length; i++) {
        if (generos[i].text === `${movie.genero}`) {
            generos[i].setAttribute("selected", "");
        }
    }
    inputCheckE.checked = movie.publicada;
}



formE.addEventListener("submit", (event) => {
    event.preventDefault();
    // AGREGAR ID EN EL OBJETO
    const nombrePeli = document.getElementById('nombreInputE').value;
    const descripcionPeli = document.getElementById('descripcionInputE').value;
    const directorPeli = document.getElementById('directorInputE').value;
    const selectGenero = document.getElementById("generoInputE");
    const generoPeli = selectGenero.options[selectGenero.selectedIndex].text;
    const categoriaPeli = document.getElementById('categoriaInputE').value;
    const anioPeli = document.getElementById('anioInputE').value;
    const imagenPeli = document.getElementById('imagenInputE').value;
    const videoPeli = document.getElementById('videoInputE').value;
    const inputCheck = document.getElementById('publicadaInputE');
    let publicadaPeli = inputCheck.checked;
    const newData = {
        nombre: nombrePeli,
        descripcion: descripcionPeli,
        director: directorPeli,
        genero: generoPeli,
        categoria: categoriaPeli,
        publicada: publicadaPeli,
        año: anioPeli,
        imagen: imagenPeli,
        video: videoPeli
    };
    editMovie(idSelected, newData)
})