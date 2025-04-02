let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = weekDay[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let dateToday = document.querySelector("#date-now");

if (minutes < 10) {
  minutes = `0${minutes}`;
}

dateToday.innerHTML = `${day} ${hours}:${minutes}`;



function citySubmit(event) {
  event.preventDefault();
  //document.querySelector("main").classList.remove("hidden")
  //document.querySelector("#hideAfterSubmit").classList.add("hidden")
  let enterCity = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  let cityName = enterCity.value;
  h1.innerHTML = cityName;

  let key = "fo3a64f446f636fead1d860tcbcd7535";
  let forecastApi = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${key}&units=metric`
   
  axios.get(forecastApi).then(showForecast)
}

function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function showForecast(response) {
  //today's temperature dispay
  let cityTemp = Math.round(response.data.daily[0].temperature.day);
  let tempNow = document.querySelector(".currentTempValue");
  tempNow.innerHTML = `${cityTemp}`;

  //today's icon display
  let day0IconData = response.data.daily[0].condition.icon_url;
  let day0IconChange = document.querySelector(".currentTempIcon");
  let img0 = document.createElement("img");
    img0.src = day0IconData;
  day0IconChange.innerHTML = "";
  day0IconChange.appendChild(img0);

  //today's weather
  let day0WeatherData = response.data.daily[0].condition.description;
  day0WeatherData = toTitleCase(day0WeatherData)
  let day0WeatherChange = document.querySelector("#day0Weather");
    day0WeatherChange.innerHTML = `${day0WeatherData}`;

    //humidity in center paragraph
  let humidityData = response.data.daily[0].temperature.humidity;
  let humidityChange = document.querySelector(".humidity");
  humidityChange.innerHTML = `${humidityData}%`;

  //wind in center paragraph
  let windData = Math.round(response.data.daily[0].wind.speed);
  let windChange = document.querySelector(".wind");
  windChange.innerHTML = `${windData} `

  // first day forecast
  let day1IconData = response.data.daily[1].condition.icon_url;
  let day1IconChange = document.querySelector("#day1Icon");
  let img1 = document.createElement("img");
    img1.src = day1IconData;
  day1IconChange.innerHTML = "";
 day1IconChange.appendChild(img1);

 let day1TempData = Math.round(response.data.daily[1].temperature.day);
  let day1TempChange = document.querySelector("#day1TempValue");
  day1TempChange.innerHTML = `${day1TempData}`;

 

  let day1WeatherData = response.data.daily[1].condition.description;
  day1WeatherData = toTitleCase(day1WeatherData)
  let day1WeatherChange = document.querySelector("#day1Weather");
    day1WeatherChange.innerHTML = `${day1WeatherData}`;

//second day forecast
  let day2IconData = response.data.daily[2].condition.icon_url;
  let day2IconChange = document.querySelector("#day2Icon");
  let img2 = document.createElement("img");
    img2.src = day2IconData;
  day2IconChange.innerHTML = "";
 day2IconChange.appendChild(img2);

 let day2TempData = Math.round(response.data.daily[2].temperature.day);
  let day2TempChange = document.querySelector("#day2TempValue");
  day2TempChange.innerHTML = `${day2TempData}`;

  let day2WeatherData = response.data.daily[2].condition.description;
  day2WeatherData = toTitleCase(day2WeatherData)
  let day2WeatherChange = document.querySelector("#day2Weather");
    day2WeatherChange.innerHTML = `${day2WeatherData}`;

//third day forecast
let day3IconData = response.data.daily[3].condition.icon_url;
let day3IconChange = document.querySelector("#day3Icon");
let img3 = document.createElement("img");
  img3.src = day3IconData;
day3IconChange.innerHTML = "";
day3IconChange.appendChild(img3);

let day3TempData = Math.round(response.data.daily[3].temperature.day);
let day3TempChange = document.querySelector("#day3TempValue");
day3TempChange.innerHTML = `${day3TempData}`;

let day3WeatherData = response.data.daily[3].condition.description;
day3WeatherData = toTitleCase(day3WeatherData)
let day3WeatherChange = document.querySelector("#day3Weather");
  day3WeatherChange.innerHTML = `${day3WeatherData}`;

//fourth day forecast
  let day4IconData = response.data.daily[4].condition.icon_url;
let day4IconChange = document.querySelector("#day4Icon");
let img4 = document.createElement("img");
  img4.src = day4IconData;
day4IconChange.innerHTML = "";
day4IconChange.appendChild(img4);

let day4TempData = Math.round(response.data.daily[4].temperature.day);
let day4TempChange = document.querySelector("#day4TempValue");
day4TempChange.innerHTML = `${day4TempData}`;

let day4WeatherData = response.data.daily[4].condition.description;
day4WeatherData = toTitleCase(day4WeatherData)
let day4WeatherChange = document.querySelector("#day4Weather");
  day4WeatherChange.innerHTML = `${day4WeatherData}`;

//fifth day forecast
let day5IconData = response.data.daily[5].condition.icon_url;
let day5IconChange = document.querySelector("#day5Icon");
let img5 = document.createElement("img");
  img5.src = day5IconData;
day5IconChange.innerHTML = "";
day5IconChange.appendChild(img5);

let day5TempData = Math.round(response.data.daily[5].temperature.day);
let day5TempChange = document.querySelector("#day5TempValue");
day5TempChange.innerHTML = `${day5TempData}`;

let day5WeatherData = response.data.daily[5].condition.description;
day5WeatherData = toTitleCase(day5WeatherData)
let day5WeatherChange = document.querySelector("#day5Weather");
  day5WeatherChange.innerHTML = `${day5WeatherData}`;
}
let cityForm = document.querySelector("#city-input");
cityForm.addEventListener("submit", citySubmit);


//It was a CLASS VS ID Issue on line 37
