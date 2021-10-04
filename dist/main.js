/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  console.log(new Date(1618317040*1000));
  console.log(newObject);
}
submit.addEventListener("click", () => {
  let city = input.value.toLowerCase();
  fetchWeatherData(city);
});

fetchWeatherData();

//"http://openweathermap.org/img/wn/01d@2x.png"

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlTZWFyY2hcIik7XHJcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQnV0dG9uXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAobG9jYXRpb24gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxvY2F0aW9uID0gXCJpc3RhbmJ1bFwiO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPThhZWZiNzc3NmJkMGY0ZDkxMmRjMWQzM2I1NDRkM2QyYCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSBcIjQwNFwiKSB7XHJcbiAgICAgIHRocm93IEVycm9yKFwiNDA0XCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjaXR5T2JqZWN0KGRhdGEpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ2l0eSBpcyBub3QgZm91bmRcIik7XHJcbiAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGNpdHlPYmplY3Qob2JqZWN0KSB7XHJcbiAgbGV0IG5ld09iamVjdCA9IHt9O1xyXG4gIG5ld09iamVjdC5uYW1lID0gb2JqZWN0Lm5hbWU7XHJcbiAgbmV3T2JqZWN0LnRlbXAgPSB7fTtcclxuICBuZXdPYmplY3QudGVtcC5mZWVsc19saWtlID0gb2JqZWN0Lm1haW4uZmVlbHNfbGlrZTtcclxuICBuZXdPYmplY3QudGVtcC5jdXJyZW50ID0gb2JqZWN0Lm1haW4udGVtcDtcclxuICBuZXdPYmplY3QudGVtcC50ZW1wTWF4ID0gb2JqZWN0Lm1haW4udGVtcF9tYXg7XHJcbiAgbmV3T2JqZWN0LnRlbXAudGVtcE1pbiA9IG9iamVjdC5tYWluLnRlbXBfbWluO1xyXG4gIG5ld09iamVjdC53ZWF0aGVyID0ge307XHJcbiAgbmV3T2JqZWN0LndlYXRoZXIubWFpbiA9IG9iamVjdC53ZWF0aGVyWzBdLm1haW47XHJcbiAgbmV3T2JqZWN0LndlYXRoZXIuZGVzY3JpcHRpb24gPSBvYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICBuZXdPYmplY3QuaWNvbiA9IG9iamVjdC53ZWF0aGVyWzBdLmljb247XHJcbiAgY29uc29sZS5sb2cobmV3IERhdGUoMTYxODMxNzA0MCoxMDAwKSk7XHJcbiAgY29uc29sZS5sb2cobmV3T2JqZWN0KTtcclxufVxyXG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBsZXQgY2l0eSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgZmV0Y2hXZWF0aGVyRGF0YShjaXR5KTtcclxufSk7XHJcblxyXG5mZXRjaFdlYXRoZXJEYXRhKCk7XHJcblxyXG4vL1wiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDFkQDJ4LnBuZ1wiXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==