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
  console.log('🚀 ~ addMovieHandler ~ newMovie', newMovie);
};

// Listeners
addMovieBtn.addEventListener('click', addMovieHandler);
