import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
axios
  // Get request to retrieve the current weather data using the API key and providing a city name
  .get(
    `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
  )
  .then(response => {
    // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
    const kelvinToFahrenheit = kelvinTemp =>
      Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

    // Create an object to be stored in the Home state from the response
    store.Home.weather = {
      city: response.data.name,
      temp: kelvinToFahrenheit(response.data.main.temp),
      feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
      description: response.data.weather[0].main
    };

    // An alternate method would be to store the values independently
    /*
      store.Home.weather.city = response.data.name;
      store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
      store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
      store.Home.weather.description = response.data.weather[0].main;
      */
  })
  .catch(err => {
    console.log(err);
  });
params => {
  const view =
    params && params.data && params.data.view
      ? capitalize(params.data.view)
      : "Home";

  render(store[view]);
};
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        console.log(`View ${view} not defined`);
        render(store.Viewnotfound);
      }
    }
  })
  .resolve();

// Promise.all([
//   axios.get(
//     `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAP_QUEST_API}&center=Gorham,ME&size=600,400@2x
//     ,`
//   ),
//   // axios.post(`${process.env.MAP_QUEST_API}/map`, requestData),
// ])

//   .then((response) => {
//     console.log(response);

//     }, );

//   // .catch((error) => {
//   //   console.log("It puked", error);
//   // });

// if (state.view === "Contact") {
// /*
// Please refer to the documentation:
// https://developer.mapquest.com/documentation/mapquest-js/v1.3/
// */

// L.mapquest.key = process.env.MAP_QUEST_API;

// let map = L.mapquest.map("Contact",{
//   // street: '200 Narragansett Street',
//   // city: 'Gorham',
//   // state: 'ME',
//   // postalCode: '04038'
//   center: [42.361145, -71.057083],
//       layers: L.mapquest.tileLayer("map"),
//       zoom: 11,
//       zoomControl: true,
// });

// // map.addControl(L.mapquest.satelliteControl());
// map.addControl(L.mapquest.control());
// {
// map.addControl(
// L.mapquest.geocodingControl({
//   position: "topleft",
// })
// )};
