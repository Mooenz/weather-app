// Utils
import { MAIN_RESULT_HOURLY } from '../utils/DOMElements.js';

// Functions
import { convertTime } from './convertTime.js';

const urlImg = 'https://openweathermap.org/img/wn/'
const showHourly = (hourlyData) => {
  try {
    MAIN_RESULT_HOURLY.innerHTML = ``;

    for (const property in hourlyData) {
      const { dt, temp, weather } = hourlyData[property];
      const {icon} = weather[0]
      MAIN_RESULT_HOURLY.innerHTML += `
      <div class="hourly">
        <p>${convertTime(dt)}0</p>
        <img src="${urlImg}${icon}@2x.png" />
        <p class="temp">${Math.round(temp)}°</p>
      </div>
      `;
    }
  } catch (error) {
    console.error(`Existe un error al mostrar los datos por horas: ${error}`);
  }
};

export { showHourly };
