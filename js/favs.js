const containerFavs = document.getElementById("favorites-list")
const favsTitle = document.createElement("div");
favsTitle.classList.add("titlesandbtns","dropdown-header", "text-center","bg-color1","color6","mt-0");
favsTitle.style.fontSize="large"
favsTitle.innerHTML="Lista de favoritos"
containerFavs.appendChild(favsTitle);

function getFavsLS() {
    return JSON.parse(localStorage.getItem('favs'));
}
function renderFavsLS()
{
    setTimeout(() => {
        let favs = getFavsLS();
        favs.forEach((fav)=>{
            const favorite=document.createElement("div")
            favorite.id=`fav-${fav.id}`
            favorite.style.width= "350px";
            favorite.classList.add(`fav-${fav.id}`,"dropdown-item");
            favorite.innerHTML=`
            <div class="row no-gutters">
                <div class="col-md-4" style="height:100px">
                    <img src="${fav.imagen}" class="card-img h-100" alt="...">
                </div>
                <div class="col-md-7">
                    <a href="detail.html#${fav.id}" class="text-decoration-none color1"><h5 class="card-title">${fav.nombre}</h5></a>
                </div>
                <div class="col-md-1">
                    <h3 class="delete-fav color2 ml-2" role="button">&times</h3>
                </div>
            </div>
            <hr>
            `;
            containerFavs.appendChild(favorite);
        })
    },2000);
}
function deleteFav(e)
{
    if(e.target.classList.contains("delete-fav"))
    {
        e.preventDefault();
        const removedElement = e.target.parentElement.parentElement.parentElement
        const deleteId= removedElement.id.slice(4);
        removedElement.remove();
        deleteFavLS(deleteId);
    }
}
function deleteFavLS(deleteId)
{
    let favs = getFavsLS();
    favs.forEach((fav,index)=>{
        if(fav.id === deleteId)
        {
            favs.splice(index,1);
        }
    })
    localStorage.setItem("favs",JSON.stringify(favs));
}
document.addEventListener("DOMContentLoaded",renderFavsLS);
containerFavs.addEventListener("click",deleteFav);