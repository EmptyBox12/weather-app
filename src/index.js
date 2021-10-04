const input = document.querySelector("#citySearch");
const submit = document.querySelector("#searchButton");
let unit = "metric";

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
  object.daily.forEach((element,index) => {
    if(index == 0){
      return;
    }
    let day = {};
    day.dt = element.dt;
    day.temp = element.temp.day;
    day.humidity = element.humidity;
    day.feelsLike = element.feels_like.day;
    day.weather = element.weather[0].main;
    day.icon = element.weather[0].icon;
    day.description = element.weather[0].description;
    
    newObject.daily.push(day);
  });
  console.log(newObject);
  
}
submit.addEventListener("click", () => {
  let city = input.value.toLowerCase();
  fetchGeoData(city);
});

fetchGeoData();
//"http://openweathermap.org/img/wn/01d@2x.png"
