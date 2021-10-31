const INPUT = document.querySelector('.input');

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const KEY = '2f81942faa2d0ec2be12e9588c65121d';

const URL_COMPLETE = (city) =>
  `${URL}${city}&units=metric&appid=${KEY}`;

async function fetchData() {
  try {
    const DATA = await fetch(URL_COMPLETE(INPUT.value));
    const DATA_JSON = await DATA.json();
    return showResult(DATA_JSON);
  } catch (error) {
    console.error(`This is error: ${error}`);
  }  
}

function showResult(DATA_JSON) {
  console.log(DATA_JSON);
}



INPUT.addEventListener('input', fetchData, false);
