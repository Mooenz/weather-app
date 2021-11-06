// Functions
import { showSaveCitysSearches } from './showSaveCitysSearches.js';

let citySearch = ['Ibagué', 'Bogota'];

function saveCitysSearches(city) {
  if (!(city === undefined)) {
    if (!citySearch.includes(city)) {
      citySearch.push(city);
      showSaveCitysSearches(citySearch);
    }
  }
}

export { saveCitysSearches, citySearch };
