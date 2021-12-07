// Utils
import { INPUT_SEARCH, ICON_SEARCH } from './utils/DOMElements.js';

// Functions
import { getDataSearch } from './functions/getDataSearch.js';
import { showCurrent } from './functions/showDataCurrent.js';
import { showSaveCitesSearches } from './functions/showSaveCitesSearches.js';
import { showDaily } from './functions/showDataDaily.js';
import { showHourly } from './functions/showDataHourly.js';

// Default Search
let defaultSearch = {
  keyCode: 13,
  type: 'click',
};

async function searchCity(event) {
  try {
    const { keyCode, type } = event;

    if (keyCode === 13 || type === 'click') {
      const cityInput = INPUT_SEARCH.value || 'ibague';
      const dataCity = await getDataSearch(cityInput);
      console.log(dataCity);

      if (!(dataCity === 400)) {
        const { city, current, hourly, daily } = dataCity;

        showSaveCitesSearches({
          name: city.name,
          temp: current.temp,
          feels_like: current.feels_like,
        });

        showCurrent({ city, current });
        showDaily(daily);
        showHourly(hourly);

        INPUT_SEARCH.value = '';
      } else {
      }
    }
  } catch (error) {
    console.error(`Error en el fetch, ciudad no encontrada: ${error}`);
  }
}

searchCity(defaultSearch);

ICON_SEARCH.addEventListener('click', searchCity, false);
INPUT_SEARCH.addEventListener('keyup', searchCity, false);
