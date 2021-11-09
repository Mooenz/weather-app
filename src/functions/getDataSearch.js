// Utils
import { fetchSearchCity, fetchSearchCoordinate } from '../utils/fetch.js';

// Functions
import { saveCitiesSearches } from './saveCitiesSearches.js';

async function getDataSearch(cityInput) {
  try {
    const CITY = await fetchSearchCity(cityInput);

    saveCitiesSearches(CITY.name);

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
