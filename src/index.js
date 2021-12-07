// Utils
import { INPUT_SEARCH, ICON_SEARCH } from './utils/DOMElements.js';

// Functions
import { getDataSearch } from './functions/getDataSearch.js';
import { showCurrent } from './functions/showDataCurrent.js';
// import { showSaveCitiesSearches } from './functions/showSaveCitiesSearches.js';
import { showDaily } from './functions/showDataDaily.js';
import { showHourly } from './functions/showDataHourly.js';

async function searchCity(event) {
  if (event.keyCode === 13 || event.type === 'click') {
    const cityInput = INPUT_SEARCH.value || 'ibague';
    const dataCity = await getDataSearch(cityInput);

    const { city, current, hourly, daily } = dataCity;

    showCurrent({ city, current });
    showDaily(daily);
    showHourly(hourly);
    INPUT_SEARCH.value = ''
  }
}

// searchCity()

ICON_SEARCH.addEventListener('click', searchCity, false);
INPUT_SEARCH.addEventListener('keyup', searchCity, false);
