// Utils
import { MAIN_HISTORY_CONTAINER } from '../utils/DOMElements.js';
import { fetchSearchCity } from '../utils/fetch.js';

async function showSaveCitesSearches(Cities) {
  try {
    console.log(Cities)
    MAIN_HISTORY_CONTAINER.innerHTML = '';

    Cities.map((city) => {
      fetchSearchCity(city).then((response) => {
        const { name, main } = response;

        return (MAIN_HISTORY_CONTAINER.innerHTML += `
          <div class="city-search">
            <h3>${name}</h3>
            <p>${Math.round(main.temp)}°</p>
            <p>feels like ${Math.round(main.feels_like)}°</p>
          </div>
        `);
      });
    });
  } catch (error) {
    console.log(`Existe un error al mostrar los datos de las ciudades guardadas: ${error}`);
  }
}

export { showSaveCitesSearches };
