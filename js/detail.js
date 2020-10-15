

let container = document.getElementById("containerD");
let video= document.getElementById("vid");
const URL= "http://localhost:3000/peliculas";
const id= window.location.hash.slice(1);

async function getmovie(){
    const newURL = `${URL}/${id}`;
    const response= await fetch(newURL)
    const data= response.json();
    return data
}
getmovie() 
.then(dato => renderName(dato));


    function renderName(dato) {
        
            const titulo = document.createElement('h1');
            titulo.classList.add('title','titlesandbtns');
            titulo.innerHTML = `${dato.nombre}`
            
            const description= document.createElement('p');
            description.classList.add('description','commontexts');
            description.innerHTML=`${dato.descripcion}`
           
            const director= document.createElement('li');
            director.classList.add('description','commontexts');
            director.innerHTML=`Director: ${dato.director}`
            
            const genero = document.createElement('li');
            genero.classList.add('description','commontexts');
            genero.innerHTML = `Genero: ${dato.genero}`
            
            const categoria= document.createElement('li');
            categoria.classList.add('description','commontexts');
            categoria.innerHTML=`Categoria: ${dato.categoria}`
            
            const publicada= document.createElement('li');
            publicada.classList.add('description','commontexts');
            publicada.innerHTML=`Publicada: ${dato.publicada}`
 
            const año= document.createElement('li');
            año.classList.add('description','commontexts');
            año.innerHTML=`Año de Publicación: ${dato.año}`
            
            const imagen= document.createElement('img');
            imagen.classList.add('imgD');
            imagen.src=`${dato.imagen}`

            const video= document.createElement('iframe');
            video.classList.add('video');
            video.src=`${dato.video}` 
            
            

            container.appendChild(titulo)
            container.appendChild(description)
            container.appendChild(director)
            container.appendChild(genero)
            container.appendChild(categoria)
            container.appendChild(publicada) 
            container.appendChild(año)
            container.appendChild(imagen)
            vid.appendChild(video)

        }




        let contador=0;
        let comentarios = document.getElementById("comentarios");
        let imagenes =['/img/Diego.jpeg','/img/Seba.jpg','/img/Nico.jpeg','/img/Romi.jpeg','/img/Anto.jpeg','/img/Tulio.jpeg']
        URL_API= 'https://jsonplaceholder.typicode.com/comments?postId=1'


         function getComments() {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((response)=>{
                return response.json()
            })
            .then((post)=> {
                for (let index=0;  index <1; index++){
                    comentarios.innerHTML=
                    `
                    <div class="comentario container">
                    <div class="card col-lg-12">
                      <div class="row align-items-center">
                        <div class="col-3 col-md-1 ml-3">
                          <img src="data:image/png;base64,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"  >
                        </div>
                        <div class="col-8">
                          <div class="card-body p-1">
                            <h5 class="card-title mb-0">${post[contador].name}</h5>
                            <p class="card-text">${post[contador].body}</p>
                            <p class="card-text"> ${post[contador].email} </p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                        `
                        contador= contador+1;
                    }
            })
            .catch((error)=>{
                console.log(error);
            })
        } 

        

        /* function getComments() {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((response)=>{
                return response.json()
            })
            .then((post)=> {
                for (let index=0; index <1; index++){
                    comentarios.innerHTML=
                    `
                    <div class="comentario container">
                    <div class="card col-lg-12">
                      <div class="row align-items-center">
                        <div class="col-3 col-md-1 ml-3">
                          <img src="data:image/png;base64,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"  >
                        </div>
                        <div class="col-8">
                          <div class="card-body p-1">
                            <h5 class="card-title mb-0">${post[contador].name}</h5>
                            <p class="card-text">${post[contador].body}</p>
                            <p class="card-text"> ${post[contador].email} </p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                        `
                        contador= contador+1;
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        } */