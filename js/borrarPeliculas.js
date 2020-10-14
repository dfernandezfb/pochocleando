const url = 'http://localhost:3000/peliculas';
const formElim = document.getElementById(".rootFormElim"); 
const modalFormElim = document.getElementById(".eliminarPeliModal");
form.classList.add('bg-color1');
form.classList.add('color3');


async function deletMovie(id){
    const newurl = `${url}/${id}`;
    console.log(newurl);
    const response =  await fetch (newurl, {method: 'DELETE'
    })
}


deleteBtn.addEventListener('click' , e => {
    if (e.target.classList.contains ('eliminarPeli')){
        const id= e.target.parentElement.id; 
        deletMovie(id);
    }
   
})

function deleteForm(movie) {
    const headerForm = document.createElement('div');
    headerFormElim.innerHTML = `
<div class="modal-header">
<h3 class="modal-title text-center" id="exampleModalLabel">Eliminar Pelicula</h3>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
`
 const bodyForm = document.createElement('div');
 bodyFormElim.innerHTML = `
 <div class="modal-body">
  <h5 id:"modalTextDelet"> ¿Está seguro que desea eliminar esta pelicula de forma permanente?</h5>
</div>
` ;
const footerForm = document.createElement('div');
footerFormElim.innerHTML = `<div class="modal-footer">
<button type="submit" class="btn bg-color2 color3 buttonCM" id="eliminarPeli">Si</button>
<button type="submit" class="btn bg-color2 color3 buttonCM">No</button>
</div>
` ;
