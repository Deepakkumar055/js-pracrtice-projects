let input = document.querySelector("input");
let searchBtn = document.querySelector(".search");
let wheatherImg = document.querySelector(".wheather");
let temperature = document.querySelector(".temperature");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".windSpeed");

let target = "palampur";

const fetchData = async () => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=1b97f99731e441ea960174254242701&q=${target}`;

        let response = await fetch(url);
        const data = await response.json();
        updateValues(
          data.current.temp_c,
          data.location.name,
          data.current.humidity,
          data.current.wind_kph,
          data.current.condition.icon
        );
    } catch (error) {
        alert("Enter The correct Location");
    }
 
};

function updateValues(temp, area, humi, speed, emoji) {
  temperature.innerText = temp;
  city.innerText = area;
  humidity.innerText = humi + "%";
  windSpeed.innerText = speed + " km/h";
  wheatherImg.src = emoji;
}

fetchData();

const search = (e) => {
  e.preventDefault();
  target = input.value;
  fetchData();
};

const enter = (e) => {
   
  if (e.key === "Enter") {
    search();
  }
};

searchBtn.addEventListener("click", search);
input.addEventListener("keyPress", enter);
