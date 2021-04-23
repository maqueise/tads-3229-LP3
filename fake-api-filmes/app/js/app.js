import  getData  from "./api.js";

const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
const genreFilter = document.querySelector('.genre-filter')

showSpinner(false)

function showSpinner(isShow=false){
    if(isShow){
        spinner.style.display="block"
        return
    }
        spinner.style.display="none" 
}

function renderCards(movieList){
    movieList.forEach(async function(movie){
        apiData.innerHTML+=`
            <div class="card m-2" style="width:220px">
               <img src="${movie.poster}">
                <section class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p>
                        Ano: ${movie.year}
                    </p>
                    <p>
                        Genero: ${movie.genre}
                    </p>
                </section>
            </div>
        `
    }) 

}
async function getMovies(){
    showSpinner(true)
    const response = await getData('movies')
    showSpinner(false)
    const movieList = Array.from(response.data)
    renderCards(movieList) 
}

async function search(query){
    showSpinner(true)
    const response = await getData(`movies?q=${query}`)
    showSpinner(false)
    const movieList = Array.from(response.data)
    apiData.innerHTML=""
    renderCards(movieList)
}
async function getGenres(){
    const response = await getData('genre')
    const genreList = Array.from(response.data)
    genreList.forEach(function(genre){
        genreFilter.innerHTML+=`<option value="${genre.description}">${genre.description}</option>`
    })
}
const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    search(inputSearch.value)
})
genreFilter.addEventListener('change',function(){
    search(genreFilter.value)
})
getMovies()
getGenres()



  






