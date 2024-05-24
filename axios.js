const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=b099d50cf41fba6d686704ea73c6a121';

fetch(apiURL)
.then(response => response.json())
.then(data => {
    console.log(data);
    let moviesDiv = document.getElementById('movies');

    data.results.forEach(movie => {

        // Cartds
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
    
        let img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/original' + movie.poster_path;
        movieCard.appendChild(img);

        // contenido de las cards
        let titulo = document.createElement('p');
        titulo.textContent = `${movie.title}`;
        movieCard.appendChild(titulo);

        moviesDiv.appendChild(movieCard);
    });
});

// MANEJAR ESTILOS
    // TITULO
    // BARRA DE BUSQUEDA
    // CARDS - IMAGEN
        // CONTENEDOR: 
            //BOTON PEQUEÑO QUE VA A INDICAR EL IDIOMA
            // BOTON DE LA FECHA
        // TITULO
        // DESCRIPCIÓN
        // ADULTOS
        // POPULARIDAD