async function getMovies(){
    const url = "http://localhost:3000/peliculas";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


    
const listaBusqueda = document.getElementById('lista-busqueda');

function buscar() {
    getMovies()
    .then(movies => {
        if ( listaBusqueda.hasChildNodes() )
        {
            while ( listaBusqueda.childNodes.length != 0 )
            {
                listaBusqueda.removeChild( listaBusqueda.firstChild );
            }
        }
        const input = document.getElementById('search-bar-id');
        let query = input.value;
        query=query.toLowerCase();
        result=[];
        for(let i=1; i<=query.length; i++)
        {
            let aux=query.substring(0,i)
            result = movies.filter(movie => aux === movie.nombre.toLowerCase().substring(0,i));
        }
        
        result.map(movie => {
            const resultadoBusqueda = document.createElement('li');
            resultadoBusqueda.innerHTML = `
            <div class="row no-gutters">
            <div class="col-2" style="height:40px;">
                <img src="${movie.imagen}" class="card-img w-100 h-100" alt="...">
            </div>
            <div class="col-8 ml-2">
                <a href="detail.html#${movie.id}" class="text-decoration-none color1 commontexts"><h5 class="card-title">${movie.nombre}</h5></a>
            </div>
            </div>
            <hr style="margin:1px 0px 1px 0px">
            `;
            listaBusqueda.appendChild(resultadoBusqueda);
        })
    })
}