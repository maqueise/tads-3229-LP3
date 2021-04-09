const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
const genreFilter = document.querySelector('.genre-filter')

spinner.style.display="none"
async function getMovies(){
    const url = "http://localhost:3000/movies"
    spinner.style.display="block"
    const response = await axios.get(url)
    spinner.style.display="none"
    const movieList = Array.from(response.data)
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

async function search(query){
    const url =  `http://localhost:3000/movies?q=${query}`
   
    spinner.style.display="block"
    const response = await axios.get(url);
    spinner.style.display="none"
    const movieList = Array.from(response.data)
    apiData.innerHTML=""
    movieList.forEach(function(movie){
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
async function getGenres(){
    const url =`http://localhost:3000/genres`
    const response = await axios.get(url)
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



  






