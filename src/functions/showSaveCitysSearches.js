// Utils
import { MAIN_HISTORY_CONTAINER, RESULT } from '../utils/DOMElemtens.js';
import { fetchSearchCity } from '../utils/fetch.js';

async function showSaveCitysSearches(Citys) {
  try {
    MAIN_HISTORY_CONTAINER.innerHTML = '';
    Citys.map((city) => {
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

export { showSaveCitysSearches };
