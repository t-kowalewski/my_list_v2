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

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  // Finding if we're outputing full list or filtered
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movieObj) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movieObj; // otherProps will return object with remaining properties
    console.log('🚀 ~ filteredMovies.forEach ~ otherProps', otherProps);
    let text = `${movieObj.titleToUppercase()} `;

    for (const key in info) {
      if (key !== 'title') {
        text += `(${key}: ${info[key]})`;
      }
    }

    movieEl.textContent = text;
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

    titleToUppercase() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  clearInput();
  renderMovies();

  console.log('🚀 ~ addMovieHandler ~ newMovie', newMovie);
};

const filterMovieHandler = () => {
  const filterInput = document.getElementById('filter-title').value;
  renderMovies(filterInput);
};

// Listeners
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', filterMovieHandler);
