
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
    


