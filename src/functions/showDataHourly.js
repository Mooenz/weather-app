// Utilis
import { MAIN_RESULT_HOURLY } from '../utils/DOMElemtens.js';

// Functions
import { convertTime } from "./convertTime.js";

const showHourly = (hourlyData) => {
  try {
    for (const property in hourlyData) {
      const {dt, temp, weather} = hourlyData[property];

      console.log();
      // return (MAIN_RESULT_HOURLY.innerHTML = `
    
      // `);
    }
  } catch (error) {
    console.error(`Existe un error al mostrar los datos por horas: ${error}`);
  }
};

export { showHourly };
