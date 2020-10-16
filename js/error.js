const container = document.getElementById("contenedor-error"); // error404-html


function renderError() {
    var title = document.createElement("div");
    title.innerHTML = ` 
    <div class="glitch-wrapper">
    <div class="glitch-text">
    <h1> Error 404</h1>
    <h3>Page not found</h3>
    </div>
    </div>
    <a class="buttonError" href="index.html" type="button">Volver</a>
   `
    container.appendChild(title);

    container.classList.add('error-404');
    /*
    $('button').hover(function() {
        $('.glitch-wrapper').toggleClass('paused');

    }); 
    */

}

renderError();