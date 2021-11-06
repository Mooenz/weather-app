// Utilis
import { MAIN_RESULT_DAILY } from '../utils/DOMElemtens.js';

// Functions
import { convertTime } from "./convertTime.js";
import { convertDate } from "./convertDate.js";

const showDaily = (dailyData) => {
  try {
    for (const property in dailyData) {
      const {dt, temp} = dailyData[property];

      console.log(convertDate(dt));
    }

    return MAIN_RESULT_DAILY.innerHTML = `

    `;
  } catch (error) {
    console.error(`Existe un error al mostrar los datos por dias: ${error}`);
  }
};

export { showDaily };
