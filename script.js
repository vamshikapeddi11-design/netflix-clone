function scrollToMovies() {

  document.getElementById("moviesContainer")
    .scrollIntoView({
      behavior: "smooth"
    });

}

// SEARCH MOVIES

const searchInput =
document.getElementById("search");

const movieCards =
document.querySelectorAll(".movie-card");

const searchResults =
document.getElementById("searchResults");

const moviesContainer =
document.getElementById("moviesContainer");

const heroSection =
document.querySelector(".hero");

searchInput.addEventListener("keyup", function () {

  const filter =
  searchInput.value.toLowerCase();

  searchResults.innerHTML = "";

  // IF SEARCH EMPTY

  if(filter === ""){

    searchResults.style.display = "none";

    moviesContainer.style.display = "block";

    heroSection.style.display = "block";

    return;
  }

  // HIDE OTHER SECTIONS

  moviesContainer.style.display = "none";

  heroSection.style.display = "none";

  // SHOW SEARCH RESULTS

  searchResults.style.display = "flex";

  let movieFound = false;

  let addedMovies = [];

  movieCards.forEach(card => {

    const title =
    card.querySelector("h3")
    .innerText
    .toLowerCase();

    // REMOVE DUPLICATES

    if(
      title.includes(filter) &&
      !addedMovies.includes(title)
    ){

      addedMovies.push(title);

      movieFound = true;

      searchResults.innerHTML += `

      <div class="movie-card">

        <img src="${card.querySelector('img').src}">

        <div class="movie-info">
          <h3>${card.querySelector('h3').innerText}</h3>
        </div>

      </div>

      `;
    }

  });

  // MOVIE NOT FOUND

  if(!movieFound){

    searchResults.innerHTML = `

      <h2 class="not-found">
        Movie Not Found
      </h2>

    `;
  }

});

// SIGN OUT

function signOut(){

  alert("Signed Out Successfully");

  window.location.href = "index.html";

}
