// Utils
import { INPUT_SEARCH } from '../utils/DOMElemtens.js';
import { fetchSearchCity, fetchSearchCoordinate } from '../utils/fetch.js';

// Functions
import { saveCitysSearches } from './saveCitysSearches.js';

async function getDataSearch() {
  const CITY = await fetchSearchCity(INPUT_SEARCH.value);

  saveCitysSearches({
    name: CITY.name,
    coord: {
      lat: CITY.coord.lat,
      lon: CITY.coord.lon,
    },
  });

  const CITY_DATA = await fetchSearchCoordinate(CITY.coord.lat, CITY.coord.lon);

  CITY_DATA.city = { name: CITY.name, country: CITY.sys.country };
  
  return CITY_DATA;
}

export { getDataSearch };
