'use strict'
const containerCategories = document.getElementById("categories")
const categories = document.createElement("h1");
const URL = 'http://localhost:3000/peliculas/';
categories.innerHTML="Categorias"
categories.classList.add("ml-2","color5")
containerCategories.appendChild(categories);

let cats = ['Comedia','Terror','Drama','Acción','Ficción'];
for(let i=0; i<cats.length;i++)
{
    const cat = document.createElement('h2');
    const carrousel = document.createElement("div");
    cat.innerHTML=cats[i]+'...';
    cat.style.marginLeft="20px"
    carrousel.id=cats[i];
    carrousel.innerHTML=`
    <button class="angle-left h-50"><i class="fas fa-angle-left fa-2x angle-left"></i></button>
    <div class="d-flex p-5 carrousel-${cats[i]}">
    </div>
    <button class="angle-right h-50"><i class="fas fa-angle-right fa-2x angle-right"></i></button>
    `
    carrousel.classList.add("d-flex","mt-3","align-items-center","mx-2","carrousel");
    cat.classList.add("color6");
    containerCategories.appendChild(cat);
    containerCategories.appendChild(carrousel);
}

async function getMovies() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
const com = document.querySelector('.carrousel-Comedia');
const ter = document.querySelector('.carrousel-Terror');
const dra = document.querySelector('.carrousel-Drama');
const acc = document.querySelector('.carrousel-Acción');
const cie = document.querySelector('.carrousel-Ficción');

function buildComedy(movies){
    movies.map(movie => {
        if(movie.publicada==='true')
        {
            switch(movie.genero)
            {
                case 'Comedia':
                    const movieCardco = document.createElement("div");
                movieCardco.classList.add("movie-card")
                movieCardco.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title color3 m-2 text-center">${movie.nombre}</h5>
                <p class="color3 movie-resume mb-0 mt-3 mx-3 text-center">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                </div>
                </div>
                </div>
                `;
                com.appendChild(movieCardco);
                break;
            case 'Terror':
                const movieCardte = document.createElement("div");
                movieCardte.classList.add("movie-card")
                movieCardte.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 text-center">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                </div>
                </div>
                </div>
                `;
                ter.appendChild(movieCardte);
                break;
            case 'Drama':
                const movieCarddr = document.createElement("div");
                movieCarddr.classList.add("movie-card")
                movieCarddr.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 text-center">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                </div>
                </div>
                </div>
                `;
                dra.appendChild(movieCarddr);
                break;
            case 'Acción':
                const movieCardac = document.createElement("div");
                movieCardac.classList.add("movie-card")
                movieCardac.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 text-center">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                <a href="#" class="btn text-light"><i class="fas fa-star fa-2x"></i></i></a>
                </div>
                </div>
                </div>
                `;
                acc.appendChild(movieCardac);
                break;
                case 'Ciencia Ficcion':
                const movieCardci = document.createElement("div");
                movieCardci.classList.add("movie-card")
                movieCardci.innerHTML = `
                <div id="${movie.id}" class="movie d-flex flex-column" style="background-image:url('${movie.imagen}');">
                <div class="resume">
                <h5 class="movie-title text-light m-2 text-center">${movie.nombre}</h5>
                <p class="text-light movie-resume mb-1 mt-3 mx-3 text-center">${movie.descripcion}</p>
                <div class="d-flex justify-content-center mb-5">
                <div>
                <a href="detail.html#${movie.id}" class="btn text-light"><i class="far fa-play-circle fa-2x"></i></a>
                </div>
                </div>
                </div>
                `;
                cie.appendChild(movieCardci);
                break;        
            }
        }
        com.scrollLeft=ter.scrollLeft=dra.scrollLeft=acc.scrollLeft=cie.scrollLeft=0;
    })
}

getMovies()
.then(movies => buildComedy(movies));

containerCategories.addEventListener("click",(event)=>{
    if(event.target.classList.contains("angle-right"))
    {   
        if(event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia' )
        {
            com.scrollLeft+=260;
        }else if(event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror')
        {
            ter.scrollLeft+=260;
        } else if(event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama')
        {
            dra.scrollLeft+=260;
        } else if(event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción')
        {
            acc.scrollLeft+=260;
        } else(event.target.parentElement.id === 'Ficción' || event.target.parentElement.parentElement.id === 'Ficción')
        {
            cie.scrollLeft+=260;
        }
    }
})
containerCategories.addEventListener("click",(event)=>{
    if(event.target.classList.contains("angle-left"))
    {
        if(event.target.parentElement.id === 'Comedia' || event.target.parentElement.parentElement.id === 'Comedia' )
        {
            com.scrollLeft+=-260;
        }else if(event.target.parentElement.id === 'Terror' || event.target.parentElement.parentElement.id === 'Terror')
        {
            ter.scrollLeft+=-260;
        } else if(event.target.parentElement.id === 'Drama' || event.target.parentElement.parentElement.id === 'Drama')
        {
            dra.scrollLeft+=-260;
        } else if(event.target.parentElement.id === 'Acción' || event.target.parentElement.parentElement.id === 'Acción')
        {
            acc.scrollLeft+=-260;
        } else(event.target.parentElement.id === 'Ficción' || event.target.parentElement.parentElement.id === 'Ficción')
        {
            cie.scrollLeft+=-260;
        }
    }
})