// Utils
import { MAIN_HISTORY_CONTAINER } from '../utils/DOMElements.js';
// import { fetchSearchCity } from '../utils/fetch.js';

async function showSaveCitesSearches(city) {
  try {
    const title = '';

    const { name, temp, feels_like } = city;

    return (MAIN_HISTORY_CONTAINER.innerHTML += `
          <div class="city-search">
            <h3>${name}</h3>
            <p>${Math.round(temp)}°</p>
            <p>Feels Like ${Math.round(feels_like)}°</p>
          </div>
        `);
  } catch (error) {
    console.log(
      `Existe un error al mostrar los datos de las ciudades guardadas: ${error}`
    );
  }
}

export { showSaveCitesSearches };
