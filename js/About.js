'use strict'
const container = document.getElementById("root");
let nombres = ['Diego Fernandez','Antonella Mercado','Romina Estrada','Sebastian Salas','Nicolas Sanchez','Florencia Ibañez','Tulio Moya'];
let imagenes =['/img/Diego.jpeg','/img/Seba.jpg','/img/Nico.jpeg','/img/Romi.jpeg','/img/Anto.jpeg','/img/Tulio.jpeg','/img/Flor.jpeg']
// crear array de imagenes y probar en src


/* const button = document.createElement('button'); */

const vacio= document.createElement('div')
vacio.classList.add('vacio');

const title= document.createElement('h1');
title.classList.add('titulo',"titlesandbtns");
title.innerHTML= `¿Que es Pochocleando?`;
const aboutus= document.createElement('p');
aboutus.classList.add('nosotros', 'commontexts', 'color6');
aboutus.innerHTML= `
Pochocleando es un servicio de streaming por suscripción que les permite a sus miembros ver series y películas sin publicidades en un dispositivo con conexión a internet.
También puedes descargar series y películas en un dispositivo con iOS, Android o Windows 10 y verlas sin conexión a internet.
<br> El contenido de Pochocleando varía según la región, y también puede variar en el tiempo. 
Puedes elegir entre una amplia variedad de documentales, películas, series, contenido original de Pochocleando y mucho más. 
<br> Cuanto más contenido ves, Pochocleando, mejor puede recomendarte series y películas que seguro te encantarán.
¿Que esperas para suscribirte? , puedes ver algo del contenido que Pochocleando tiene para ofrecer.
`
const title2= document.createElement('h1');
title2.classList.add('titulo','titlesandbtns');
title2.innerHTML= `Dispositivos Compatibles`;
const aboutus2= document.createElement('p');
aboutus2.classList.add('nosotros','commontexts','color6');
aboutus2.innerHTML= `Puedes ver Pochocleando a través de cualquier dispositivo con conexión a internet que cuente con la app de Pochocleando, 
incluidos smart TV, consolas de juegos, reproductores multimedia, decodificadores, smartphones y tablets. <br> También puedes ver Pochocleando en tu computadora, en un navegador de internet. Para obtener información sobre los navegadores web compatibles, consulta los <a href="#"> requisitos del sistema</a>, además de nuestras recomendaciones sobre la velocidad de conexión a internet para lograr el mejor rendimiento. 
<br> ¿Necesitas ayuda para la configuración?
 Busca en nuestro <a href="#"> Centro de ayuda</a> el fabricante del dispositivo que estás utilizando.`;

const title3= document.createElement('h1');
title3.classList.add('titulo','titlesandbtns');
title3.innerHTML= `Nuestro Equipo`;
const aboutus3= document.createElement('p');
aboutus3.classList.add('nosotros','commontexts','color6');
aboutus3.innerHTML= `Somos un equipo pequeño y unido, centrado en hacer que Pochocleando sea poderoso y fácil de usar.
 <br> Algunos de nosotros tenemos nuestro propio trabajo en pochocleando, otros son directores, ilustradores y cineastas. 
 Hemos trabajado duro para construir una empresa en la que hacemos grandes cosas. Estamos aquí para ayudarlo a encontrar comodidad y dirvesion en una plataforma sencilla y facil de usar.`;
 
const card= document.createElement('div'); 
    card.innerHTML=
        `
        <div class= "row">
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[0]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[0]} </h2>
            <hr>
            <p class="commontexts"> 24 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[4]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[1]} </h2>
            <hr>
            <p class="commontexts"> 29 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[3]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[2]} </h2>
            <hr>
            <p class="commontexts"> 28 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[1]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[3]} </h2>
            <hr>
            <p class="commontexts"> 24 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[2]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[4]} </h2>
            <hr>
            <p class="commontexts"> 23 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[6]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[5]} </h2>
            <hr>
            <p class="commontexts"> 24 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            <div class ="col-12 col-md-6 col-lg-4 col-xl-3 col-sm-6 mb-4 mx-auto">
            <div class ="card">
            <figure> <img class ="frontal" src=${imagenes[5]} />  
            <figcaption class="trasera">
            <h2 class="titlesandbtns"> ${nombres[6]} </h2>
            <hr>
            <p class="commontexts"> 27 Años
            <br> Desarrolador web- Pochocleando </p>
            </figcaption>
            </figure>
            </div>
            </div>
            
            
         </div>
            `
    container.appendChild(vacio);
    container.appendChild(title);
    container.appendChild(aboutus);
    container.appendChild(title2);
    container.appendChild(aboutus2);
    container.appendChild(title3);
    container.appendChild(aboutus3);
    container.appendChild(card);

