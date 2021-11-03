// Utils
import { MAIN_HISTORY_CONTAINER, RESULT } from '../utils/DOMElemtens.js';

// Functions
import { fetchSearchCity } from "./getDataSearch";

async function showSaveCitysSearches(arrayCitys) {
  arrayCitys.map((city) => {
    const CITY = fetchSearchCity()
  })

  // console.log(MAIN_HISTORY_CONTAINER);
}

export { showSaveCitysSearches };
