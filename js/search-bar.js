async function getMovies(){
    const url = "localhost:3000/peliculas";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

/*const elements = movies.map(function(item) {
    return `<ul><li>${movie.nombre}</li></ul>`
})*/
    
let container = document.getElementById('lista-busqueda');
    
container.innerHTML = elements;
  
function buscar() {
    getMovies()
    .then(movies => {
        let input = document.getElementById('search-bar-id');
        let query = input.value;
        
        const result = movies.filter(function(movie) {
            return query === movie.nombre;
        })
        
        const searchlist = result.map(movie => {
            return `<ul><li>${movie.nombre}</li></ul>`
        })
    })
    
    container.innerHTML = searchlist;
}