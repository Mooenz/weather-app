// Utils
import { fetchSearchCity, fetchSearchCoordinate } from '../utils/fetch.js';
import { MAIN_SEARCH_CONTAINER, MAIN_SEARCH } from '../utils/DOMElements.js';

async function getDataSearch(cityInput) {
  try {
    const CITY = await fetchSearchCity(cityInput);

    if (CITY.cod === 200) {
      const { lat, lon } = CITY.coord;
      const CITY_DATA = await fetchSearchCoordinate(lat, lon);

      CITY_DATA.city = { name: CITY.name, country: CITY.sys.country };
      return CITY_DATA;
    } else {
      MAIN_SEARCH_CONTAINER.classList.add('error');

      MAIN_SEARCH.innerHTML += `<p>💥<span class="text-error">La cuidad no fue encontrada, lo siento.</span></p>`;
      return CITY.cod;
    }
  } catch (error) {
    console.error(
      `Existe un error al llamar los datos de una ciudad: ${error}`
    );
  }
}

export { getDataSearch };
