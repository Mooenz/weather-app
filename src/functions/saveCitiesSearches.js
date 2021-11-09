// Functions
import { showSaveCitesSearches } from './showSaveCitesSearches.js';

let citySearch = ['Ibagué', 'Bogota'];

function saveCitiesSearches(city) {
  if (!(city === undefined)) {
    if (!citySearch.includes(city)) {
      citySearch.push(city);
      showSaveCitesSearches(citySearch);
    }
  }
}

showSaveCitesSearches(citySearch);

export { saveCitiesSearches };
