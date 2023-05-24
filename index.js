import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize, map } from "lodash";
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
map
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

window.onload = function() {
  L.mapquest.key = "jlG0kYEafM8blAMSGfQfmOsXtpQohxdj";

  const map = L.mapquest.map("map", {
    center: [0, 0],
    layers: L.mapquest.tilelayer("map"),
    zoom: 5
  });
};

map.addControl(L.mapquest.control());

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Contact";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Contact":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAP_QUEST_API}&center=Boston,MA&size=600,400@2x`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            // Create an object to be stored in the Home state from the response
            store.Contact.map = {
              center: [0, 0],
              layers: L.mapquest.tilelayer("map"),
              zoom: 5
            };
            // An alternate method would be to store the values independently
            /*
      store.Home.weather.city = response.data.name;
      store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
      store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
      store.Home.weather.description = response.data.weather[0].main;
      */
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Contact";
    render(store[view]);
  }
});

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
