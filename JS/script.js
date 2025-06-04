document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = '5cf7c576d6c444bc261a1a473e90c204'; 
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('input', fetchMoviesByName);

    async function fetchInitialMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    }
    document.body.addEventListener('click', function () {
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
        }
    }, { once: true }); 

    async function fetchMoviesByName() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${searchBox.value}`;
        const response = await fetch(url);
        const data = await response.json();
        displayMovies(data.results);
    }

    function displayMovies(movies) {
        const container = document.getElementById('movie_list');
        container.innerHTML = '';
        movies.forEach(movie => {
            const movieEl = document.createElement('div');
            movieEl.className = 'movie';
            movieEl.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h2><a href="detail.html?name=${movie.title}">${movie.title}</a></h2>
                <p>Fecha: ${movie.release_date}</p>
                <p>Rating: ${movie.vote_average}</p>
                <p>Idioma: ${movie.original_language}</p>
            `;
            container.appendChild(movieEl);
        });
    }

    fetchInitialMovies();
});





