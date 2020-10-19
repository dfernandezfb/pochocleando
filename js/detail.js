'use strict'
let container = document.getElementById("containerD");
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
            director.innerHTML=` <b> Director: </b> ${dato.director}`
            
            const genero = document.createElement('li');
            genero.classList.add('description','commontexts');
            genero.innerHTML = `<b> Genero:</b> ${dato.genero}`
            
            const categoria= document.createElement('li');
            categoria.classList.add('description','commontexts');
            categoria.innerHTML=`<b> Categoria:</b> ${dato.categoria}`

            const año= document.createElement('li');
            año.classList.add('description','commontexts');
            año.innerHTML=`<b> Año de Publicación: </b> ${dato.año}`
            
            const imagen= document.createElement('img');
            imagen.classList.add('imgD');
            imagen.src=`${dato.imagen}`
            
            const btn= document.createElement('button');
            btn.classList.add('botonD'); 
            btn.innerHTML = `<a href="error404.html" class="class_a_href"> <i class="fas fa-play"></i>Reproducir </a>`
            
            const btn1= document.createElement('button');
            btn1.classList.add('botonD'); 
            btn1.innerHTML = `<a class="class_a_href"> <i class="fas fa-info-circle"></i> Comentarios </a>`
            btn1.addEventListener("click",getComments);
            const btn2= document.createElement('button');
            btn2.classList.add('botonD'); 
            btn2.innerHTML = `<a class="class_a_href" href="error404.html">  <i class="fa fa-thumbs-up " ></i> </a>`
            const btn3= document.createElement('button');
            btn3.classList.add('botonD'); 
            btn3.innerHTML = `<a class="class_a_href" href="error404.html"> <i class="fa fa-thumbs-down " ></i> </a>`
            const btn4= document.createElement('button');
            btn4.classList.add('botonD'); 
            btn4.innerHTML = `<a class="class_a_href" href="error404.html"> <i class="fa fa-star" ></i> </a>`
            const btn5= document.createElement('button');
            btn5.classList.add('botonD'); 
            btn5.innerHTML = `<a class="class_a_href" href="error404.html"> HD </a>`
 
            const video= document.createElement('iframe');
            video.classList.add('video');
            video.src=`${dato.video}` 
            
            container.appendChild(titulo)
            container.appendChild(description)
            container.appendChild(director)
            container.appendChild(genero)
            container.appendChild(categoria)
            container.appendChild(año)
            container.appendChild(imagen)
            container.appendChild(btn)
            container.appendChild(btn1)
            container.appendChild(btn2)
            container.appendChild(btn3)
            container.appendChild(btn4)
            container.appendChild(btn5)
            container.appendChild(video)
          }


        let contador=0;
        let comentarios = document.getElementById("comentarios");

         function getComments() {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((response)=>{
                return response.json()
            })
            .then((posts)=> {
              const t_comentarios= document.createElement("h1");
              t_comentarios.innerHTML= `Comentarios`;
              t_comentarios.classList.add('title_c','titlesandbtns');
              comentarios.appendChild(t_comentarios);
              posts.map(post =>
                {
                  const comentario = document.createElement("div");
                  comentario.innerHTML=
                  `
                  <div class="c_container">
                  <div >
                    <div class="row align-items-center">
                      <div class="col-3 col-md-1 ml-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" class="card-img rounded-circle w-100" alt="" >
                      </div>
                      <div class="col-8 ">
                        <div class="card-body p-1 card_s">
                          <h5 class="card-title titulo-comentario mb-0">${post.name}</h5>
                          <p class="card-text">${post.body}</p>
                          <p class="card-text"> ${post.email} </p> 
                        </div>
                      </div>
                    </div>
                  </div>
                   </div>
                      `
                      comentarios.appendChild(comentario);
                    }) 
            })
        }

  