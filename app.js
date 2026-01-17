const movieData = [
  { name: "Avengers: Endgame", img: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },
  { name: "Avengers: Infinity War", img: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },
  { name: "Spider-Man: No Way Home", img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },
  { name: "Iron Man", img: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
  { name: "Captain America: Civil War", img: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg" },
  { name: "Thor: Ragnarok", img: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },

  { name: "The Batman (2022)", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { name: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { name: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },

  { name: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
  { name: "Interstellar", img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { name: "Tenet", img: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },

  { name: "John Wick", img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },

  { name: "John Wick: Chapter 3", img: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" },

  { name: "Gladiator", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
  { name: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
 
  { name: "Avatar: The Way of Water", img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },

  { name: "Black Panther", img: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { name: "Doctor Strange", img: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
  { name: "Guardians of the Galaxy", img: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },

 
  { name: "Fast & Furious 7", img: "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg" }
];

const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search");

function renderMovies(list) {
  moviesContainer.innerHTML = "";

  if (list.length === 0) {
    moviesContainer.innerHTML = "<p>No movies found 😕</p>";
    return;
  }

  list.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = movie.img;
    img.alt = movie.name;

    img.onerror = () => {
      img.src = "https://via.placeholder.com/300x450/111/ffffff?text=No+Image";
    };

    const title = document.createElement("h3");
    title.textContent = movie.name;

    card.appendChild(img);
    card.appendChild(title);
    moviesContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = movieData.filter(movie =>
    movie.name.toLowerCase().includes(value)
  );
  renderMovies(filtered);
});

renderMovies(movieData);
