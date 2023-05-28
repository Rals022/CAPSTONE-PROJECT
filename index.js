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

  if (state.view === "Survey") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        question1: inputList.question1.value,
        question2: inputList.question2.value,
        question3: inputList.question3.value,
        question4: inputList.question4.value,
        question5: inputList.question5.value,
        question6: inputList.question6.value,
        comment1: inputList.comment1.value,
        comment2: inputList.comment2.value,
        comment3: inputList.comment3.value,
        comment4: inputList.comment4.value,
        comment5: inputList.comment5.value
      };
      console.log("request Body", requestData);

      axios
        .post(`http://localhost:4040/survey`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Survey.surveys.push(response.data);
          router.navigate("/Survey");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  router.updatePageLinks();
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Graph";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Graph":
        // New Axios get request utilizing already made environment variable
        axios
          .get(
            `mongodb+srv://rals22:rjskp4135@cluster0.8jfwken.mongodb.net/Cluster0 --collection test.surveys --type JSON --out ./Survey.js`
          )
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            store.Graph.graphs.push(response.data);
            {
              router.navigate("/Graph");
            }
            done();
          })
          .catch(error => {
            console.log("It puked", error);
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
        : "Graph";

    render(store[view]);
  }
});

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

window.onload = function() {
  L.mapquest.key = process.env.MAPQUEST_API_KEY;

  var map = L.mapquest.map("map", {
    center: [43.665980606564844, -70.46016397791472],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12
  });

  L.marker([43.665980606564844, -70.46016397791472], {
    icon: L.mapquest.icons.marker({
      primaryColor: "#22407F",
      secondaryColor: "#3B5998",
      shadow: true,
      size: "md"
      // symbol: 'T'
    })
  }).addTo(map);

  map.addControl(L.mapquest.control());
};

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
            store.Contact.map = {};
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
