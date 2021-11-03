// Utils
import { INPUT_SEARCH, ICON_SEARCH } from './utils/DOMElemtens.js';

// Funtions
import { getDataSearch } from './functions/getDataSearch.js';
import { showCurrent } from './functions/showCurrentData.js';
import { citySearch } from './functions/saveCitysSearches.js';
import { showSaveCitysSearches } from './functions/showSaveCitysSearches.js';

async function searchCity(event) {
  if (event.keyCode === 13 || event.type === 'click') {
    const dataCity = await getDataSearch();
    showCurrent(dataCity);
    showSaveCitysSearches(citySearch);
  }
}

ICON_SEARCH.addEventListener('click', searchCity, false);
INPUT_SEARCH.addEventListener('keyup', searchCity, false);
