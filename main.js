
const page = Math.floor(Math.random() * 2 * 40);

// 3bee1eb68c4b7624f934f60982b2390a
// const api_key = 'api_key=763aad1b51ae4ed320afd3680c31c2fe'
const api_key = 'api_key=3bee1eb68c4b7624f934f60982b2390a'
const base_url = "https:api.themoviedb.org/3"
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key + `&page=${page}`
// const url = `https:api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=763aad1b51ae4ed320afd3680c31c2fe&page=${page}`;
const search_url = base_url + '/search/movie?' + api_key;
const intial_image = "https://image.tmdb.org/t/p/w500/";



movie_list(api_url)



function movie_list(url) {
  fetch(url)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (res) {
      displayData(res.results);
      console.log(res);
    }).catch(function(err){
        console.log(err)
    });
}

function displayData(data) {
  document.querySelector("#container").innerHTML = null;
  data.map(function (elem) {
    main_div = document.createElement("div");

    poster_div = document.createElement("img");
    poster_div.src = `${intial_image + elem.poster_path}`;

    name_div = document.createElement("h2");
    name_div.innerText = `Realese Date ${elem.original_title}`;

    realease_date_div = document.createElement("p");
    realease_date_div.innerText = `IMDB Rating: ${elem.vote_average}`;

    imdb_rating_div = document.createElement("p");
    imdb_rating_div.innerText = `Realese Date: ${elem.release_date}`

    main_div.append(poster_div, name_div, realease_date_div, imdb_rating_div);

    document.querySelector("#container").append(main_div);
  });
}

function search_for_movies() {
  const search_box = document.querySelector("#search").value;

  if (search_box) {
    movie_list(search_url + '&query=' + search_box);
    // console.log(SearchURL + '&query' + searchTerm)

} else {
    movie_list(api_url);
}
}
