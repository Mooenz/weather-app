// Utils
import { INPUT_SEARCH } from '../utils/DOMElemtens.js';
import { fetchSearchCity, fetchSearchCoordinate } from '../utils/fetch.js';

// Functions
import { saveCitysSearches, citySearch } from './saveCitysSearches.js';

async function getDataSearch() {
  try {
    const cityInput = INPUT_SEARCH.value;
    const CITY = await fetchSearchCity(cityInput);

    saveCitysSearches(CITY.name);

    const CITY_DATA = await fetchSearchCoordinate(
      CITY.coord.lat,
      CITY.coord.lon
    );

    CITY_DATA.city = { name: CITY.name, country: CITY.sys.country };

    return CITY_DATA;
  } catch (error) {
    console.error(
      `Existe un error al llamar los datos de una ciudad: ${error}`
    );
  }
}

export { getDataSearch };
