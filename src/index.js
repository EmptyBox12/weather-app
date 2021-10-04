const input = document.querySelector("#citySearch");
const submit = document.querySelector("#searchButton");

async function fetchWeatherData(location) {
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
    cityObject(data);
  } catch (e) {
    console.log("City is not found");
  }
}
async function cityObject(object) {
  let newObject = {};
  newObject.name = object.name;
  newObject.temp = {};
  newObject.temp.feels_like = object.main.feels_like;
  newObject.temp.current = object.main.temp;
  newObject.temp.tempMax = object.main.temp_max;
  newObject.temp.tempMin = object.main.temp_min;
  newObject.weather = {};
  newObject.weather.main = object.weather[0].main;
  newObject.weather.description = object.weather[0].description;
  newObject.icon = object.weather[0].icon;

  console.log(newObject);
}
submit.addEventListener("click", () => {
  let city = input.value.toLowerCase();
  fetchWeatherData(city);
});

fetchWeatherData();

//"http://openweathermap.org/img/wn/01d@2x.png"
