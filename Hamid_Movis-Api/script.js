
let url = "https://api.themoviedb.org/3";
let apiKey = "api_key=9813ce01a72ca1bd2ae25f091898b1c7";
let path = "/discover/movie?sort_by=popularity.desc&";
let imgUrl = "https://image.tmdb.org/t/p/w500/";

let apiUrl = url + path + apiKey;
let main = document.getElementById("empty");

   getMovies(apiUrl);

  function getMovies (url) {
     fetch(url)
     .then((res) => {
      return res.json();
    })
      .then((data) => {
      showMovie(data.results);
    });
}
  showMovie= (data) => {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <a href="./Details.html?id=${id}" >
      <img src="${imgUrl + poster_path}" alt="" />
      <h4 id="movieName">${title}</h4>
    </a>
    `;
    main.appendChild(movieElement);
    // console.log(title, poster_path, id);
  });
}

//Details page
let movieId = location.search.split("=")[1];
const movieDetailsData = document.getElementById("data");

    getMoviesDetails= (url) => {
     fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((movie) => {
        if (movie.id == movieId) {
          const { title, poster_path, overview } = movie;
          //Create Element
          const mElement = document.createElement("div");
          mElement.classList.add("container");
          mElement.innerHTML = ` 
          <img  src="${imgUrl + poster_path}" / >
          <div id="dataBox"> 
          <h3>${title}</h3>
          <p>${overview}</p>
          </div>
          `;
          movieDetailsData.appendChild(mElement);
        }
      });
    });
}
getMoviesDetails(apiUrl);
