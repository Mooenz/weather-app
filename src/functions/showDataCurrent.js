// Utils
import { MAIN_RESULT, RESULT } from '../utils/DOMElements.js';

// Functions
import { convertTime } from './convertTime.js';

function showCurrent( { city, current }) {
  try {
    RESULT.innerHTML = `
      <article class="card">
      <div>
        <h2 class="card__title">${city.name}, ${city.country}</h2>
        <p class="card__temp">${Math.round(current.temp)}°</p>
        <p class="card__like-temp">Feels like ${Math.round(
          current.feels_like
        )}°</p>
      </div>
      <div>
        <p><b>Sunrise</b>${convertTime(current.sunrise)}</p>
        <p><b>Sunset</b>${convertTime(current.sunset)}</p>
        <p><b>Pressure </b>${current.pressure} hPa</p>
        <p><b>Humidity </b>${current.humidity}%</p>
        <p><b>UV </b>${current.uvi}</p>
        <p><b>Wind</b>${current.wind_speed} M/h</p>
      </div>
      </article>
    `;
  
    MAIN_RESULT.appendChild(RESULT);
  } catch (error) {
    console.error(`Existe un error al mostrar los datos completos: ${error}`);
  }
}

export { showCurrent };
