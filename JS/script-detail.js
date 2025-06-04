document.addEventListener('DOMContentLoaded', async function () {
    const API_KEY = '5cf7c576d6c444bc261a1a473e90c204';
    const params = new URLSearchParams(window.location.search); //constructor para recuperar parámetros de búsqueda(query values) desde la url 
    const movieName = params.get('name'); //es el método del contructor, que devuelve  el primer valor asociado con un parámetro de búsqueda dado.
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${movieName}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
        displayMovieDetails(data.results[0]);
    } else {
        console.error('No se encontraron películas.');
    }

    function displayMovieDetails(movie) {
        const container = document.getElementById('movie_detail');
        container.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h1>${movie.title}</h1>
            <p>${movie.overview}</p>
            <p>Fecha de lanzamiento: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
        `;
    }
});


