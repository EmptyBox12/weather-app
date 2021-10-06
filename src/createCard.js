export default function createCard(obj,unit) {
  let symbol  = "C";

  if(unit == "metric"){
    symbol = "C";
  } else{
    symbol = "F"
  }
  const display = document.querySelector(".display");
  //weather
  let descriptionDay = document.createElement("div");
  descriptionDay.classList.add("descriptionDay");

  let descriptionMain = document.createElement("p");
  descriptionMain.classList.add("descriptionMain");
  descriptionMain.textContent = obj.weather;

  let descriptionDayText = document.createElement("p");
  descriptionDayText.classList.add("descriptionDayText");
  descriptionDayText.textContent = obj.description;

  descriptionDay.appendChild(descriptionMain);
  descriptionDay.appendChild(descriptionDayText);
 //feelsLike
  let feelsLikeDay = document.createElement("div");
  feelsLikeDay.classList.add("feelsLikeDay");

  let feelsLikeDayMain = document.createElement("p");
  feelsLikeDayMain.classList.add("descriptionMain");
  feelsLikeDayMain.textContent = obj.feelsLike + symbol;
  
  let feelsLikeDayText = document.createElement("p");
  feelsLikeDayText.classList.add("feelsLikeDayText");
  feelsLikeDayText.textContent = "Feels Like";

  feelsLikeDay.appendChild(feelsLikeDayMain);
  feelsLikeDay.appendChild(feelsLikeDayText);
  //humidity
  let humidityDay = document.createElement("div");
  humidityDay.classList.add("humidityDay");

  let humidityDayMain = document.createElement("p");
  humidityDayMain.classList.add("humidityDayMain");
  humidityDayMain.textContent = obj.humidity +"%";
  
  let humidityDayText = document.createElement("p");
  humidityDayText.classList.add("humidityDayText");
  humidityDayText.textContent = "Humidity";
  
  humidityDay.appendChild(humidityDayMain);
  humidityDay.appendChild(humidityDayText);
  //bottomDay
  let bottomDay = document.createElement("div");
  bottomDay.classList.add("bottomDay");

  bottomDay.appendChild(descriptionDay);
  bottomDay.appendChild(feelsLikeDay);
  bottomDay.appendChild(humidityDay);
  //tempDay
  let tempDay = document.createElement("p");
  tempDay.classList.add("tempDay");
  tempDay.textContent = obj.temp + symbol;
  //icon
  let dayIcon = document.createElement("img");
  dayIcon.classList.add("dayIcon");
  dayIcon.src = `https://openweathermap.org/img/wn/${obj.icon}.png`;
  //topDay
  let topDay = document.createElement("div");
  topDay.classList.add("topDay");
  
  topDay.appendChild(tempDay);
  topDay.appendChild(dayIcon);
  //day(date)
  let day = document.createElement("p");
  day.classList.add("day");
  day.textContent = obj.dt;
  //card
  let card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(day);
  card.appendChild(topDay);
  card.appendChild(bottomDay);
  //cardImg
  let cardImg = document.createElement("div");
  cardImg.classList.add("cardImg");
  backgroundSelector(cardImg,descriptionMain.textContent);
  cardImg.appendChild(card);

  //append display
  display.appendChild(cardImg);
}
function backgroundSelector(cardImg, weather) {
  let background = cardImg;
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