// Functions
import { showSaveCitesSearches } from './showSaveCitesSearches.js';

// let idCity = 2;
let citySearch = ['Ibagué','Bogota'];
// let citySearch = [{name:'Ibagué', id: 1}, {name:'Bogota', id: 2}];

function saveCitiesSearches(city) {
  if (!(city === undefined)) {
    if (!citySearch.includes(city)) {
      citySearch.push(city);
      // citySearch.push({ name: city, id: idCity += 1 });

      showSaveCitesSearches(citySearch);
    }
  }
}

showSaveCitesSearches(citySearch);

export { saveCitiesSearches };
