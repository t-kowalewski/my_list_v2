// Elements
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

// Data
const movies = [];

// Functions
const clearInput = () => {
  document.getElementById('title').value = '';
  document.getElementById('extra-name').value = '';
  document.getElementById('extra-value').value = '';
};

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  movies.forEach((movieObj) => {
    const movieEl = document.createElement('li');
    movieEl.textContent = movieObj.info.title;
    movieList.append(movieEl);
  });
};

// Handlers
const addMovieHandler = () => {
  const titleInput = document.getElementById('title').value;
  const extraInfoName = document.getElementById('extra-name').value;
  const extraInfoValue = document.getElementById('extra-value').value;

  if (
    titleInput.trim() === '' ||
    extraInfoName.trim() === '' ||
    extraInfoValue.trim() === ''
  ) {
    alert('One or few input fields were empty');
    return;
  }

  const newMovie = {
    info: {
      title: titleInput,
      [extraInfoName]: extraInfoValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  clearInput();
  renderMovies();

  console.log('🚀 ~ addMovieHandler ~ newMovie', newMovie);
};

// Listeners
addMovieBtn.addEventListener('click', addMovieHandler);
