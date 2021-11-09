// Utilis
import { MAIN_RESULT_HOURLY } from '../utils/DOMElements.js';

// Functions
import { convertTime } from './convertTime.js';

const showHourly = (hourlyData) => {
  try {
    MAIN_RESULT_HOURLY.innerHTML = ``;

    for (const property in hourlyData) {
      const { dt, temp, weather } = hourlyData[property];

      MAIN_RESULT_HOURLY.innerHTML += `
      <div class="hourly">
        <p>${convertTime(dt)}</p>
        <div>icono</div>
        <p>${Math.round(temp)}°</p>
      </div>
      `;
    }
  } catch (error) {
    console.error(`Existe un error al mostrar los datos por horas: ${error}`);
  }
};

export { showHourly };
