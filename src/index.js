const input = document.querySelector("#citySearch");
const submit = document.querySelector("#searchButton");
let unit = "metric";
let metric = true;
let fahrenheit = false;

async function fetchGeoData(location) {
  try {
    if (location == undefined) {
      location = "istanbul";
    }
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8aefb7776bd0f4d912dc1d33b544d3d2`,
      { mode: "cors" }
    );
    if (response.status == "404") {
      throw Error("404");
    }
    let data = await response.json();
    let geo = {};
    geo.lon = data.coord.lon;
    geo.lat = data.coord.lat;
    geo.name = data.name;
    fetchWeatherData(geo, unit);
  } catch (e) {
    console.log("City is not found");
  }
}
async function fetchWeatherData(geo, unit) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${geo.lat}&lon=${geo.lon}&exclude=minutely,hourly,alerts&units=${unit}&appid=8aefb7776bd0f4d912dc1d33b544d3d2`,
    { mode: "cors" }
  );
  let data = await response.json();
  cityObject(data, geo.name);
}
function cityObject(object, name) {
  let newObject = {};
  newObject.name = name;
  newObject.current = {};
  newObject.current.temp = object.current.temp;
  newObject.current.feelsLike = object.current.feels_like;
  newObject.current.humidity = object.current.humidity;
  newObject.current.icon = object.current.weather[0].icon;
  newObject.current.weather = object.current.weather[0].main;
  newObject.current.description = object.current.weather[0].description;
  newObject.daily = [];
  object.daily.forEach((element, index) => {
    if (index == 0) {
      return;
    }
    let day = {};
    day.dt = convertDay(element.dt);
    day.temp = element.temp.day;
    day.humidity = element.humidity;
    day.feelsLike = element.feels_like.day;
    day.weather = element.weather[0].main;
    day.icon = element.weather[0].icon;
    day.description = element.weather[0].description;

    newObject.daily.push(day);
  });
  populateCurrent(newObject);
}

function convertDay(date) {
  let d = new Date(date * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  return day;
}
function backgroundSelect(weather) {
  const background = document.querySelector(".leftSideImg");
  if (weather == "Clear") {
    background.style.backgroundImage = `url("img/clearSky.jpg")`;
  } else if (weather == "Clouds") {
    background.style.backgroundImage  = `url("img/cloudy.jpg")`;
  } else if (
    weather == "Rain" ||
    weather == "Drizzle" ||
    weather == "Thunderstorm"
  ) {
    background.style.backgroundImage  = `url("img/rainy.jpg")`;
  } else if (weather == "Snow") {
    background.style.backgroundImage = `url("img/snowy.jpg")`;
  } else {
    background.style.backgroundImage = `url("img/clearSky.jpg")`;
  }
}
function populateCurrent(obj) {
  const cityName = document.querySelector("#cityName");
  const temp = document.querySelector("#temperature");
  const icon = document.querySelector("#tempImg");
  const weatherMain = document.querySelector("#weatherMain");
  const weatherDescription = document.querySelector("#weatherDescription");
  const feelsLike = document.querySelector("#feelsLikeMain");
  const humidity = document.querySelector("#humidityMain");

  cityName.textContent = obj.name;
  temp.textContent = obj.current.temp + "C";
  icon.src = `http://openweathermap.org/img/wn/${obj.current.icon}@2x.png`;
  weatherMain.textContent = obj.current.weather;
  backgroundSelect(obj.current.weather);
  weatherDescription.textContent = obj.current.description;
  feelsLike.textContent = obj.current.feelsLike + "C";
  humidity.textContent = obj.current.humidity + "%";
}

submit.addEventListener("click", () => {
  let city = input.value.toLowerCase();
  fetchGeoData(city);
});

fetchGeoData();
//"http://openweathermap.org/img/wn/01d@2x.png"
