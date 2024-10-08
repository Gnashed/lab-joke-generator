// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../api/jokesData';
import jokeCard from '../components/jokeCard';
import renderToDom from '../utils/renderToDom';

const init = () => {
  renderToDom('#app', `
    <div class="joke-container container py-3">
      <h1>Joke Generator</h1>
      <small id="joke-delivery">Welcome! Click the button to get started</small><br />
      <button class="btn btn-outline-warning mt-2" id="click-me">Get a joke</button><br />
    </div>
  `);
  // getJoke().then((joke) => jokeCard(joke));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

const events = () => {
  document.querySelector('#click-me')
    .addEventListener('click', () => {
      getJoke().then((joke) => jokeCard(joke));
    });
};

init();
events();
