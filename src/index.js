// Utils
import { INPUT_SEARCH, ICON_SEARCH } from './utils/DOMElemtens.js';

// Funtions
import { getDataSearch } from './functions/getDataSearch.js';
import { showCurrent } from './functions/showDataCurrent.js';
import { citySearch } from './functions/saveCitysSearches.js';
import { showSaveCitysSearches } from './functions/showSaveCitysSearches.js';
import { showDaily } from './functions/showDataDaily.js';
import { showHourly } from './functions/showDataHourly.js';

async function searchCity(event) {
  if (event.keyCode === 13 || event.type === 'click') {
    const dataCity = await getDataSearch();
    const { city, current, hourly, daily } = dataCity;
    showCurrent({ city, current });
    showDaily(daily);
    showHourly(hourly);
  }
}

showSaveCitysSearches(citySearch);

ICON_SEARCH.addEventListener('click', searchCity, false);
INPUT_SEARCH.addEventListener('keyup', searchCity, false);
