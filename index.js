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
  document.querySelector("#hamburger").addEventListener("click", () => {
    document.querySelector("#mobileNav").classList.toggle("hidden-menu");
  });
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
        .post(`${process.env.SURVEY_API_URL}/survey`, requestData)
        .then(response => {
          // Push the new survey onto the Survey state survey attribute, so it can be displayed in the survey graph and list
          store.Survey.surveys.push(response.data);
          router.navigate("/Graph");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

// survey submission form

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
          .get(`${process.env.SURVEY_API_URL}/survey`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Graph.data = response.data;

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

// mapquest api
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

// router.hooks({
//   before: (done, params) => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Contact";
//     // Add a switch case statement to handle multiple routes
//     switch (view) {
//       case "Contact":
//         axios
//           // Get request to retrieve the current weather data using the API key and providing a city name
//           .get(
//             `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAP_QUEST_API}&center=Boston,MA&size=600,400@2x`
//           )
//           .then(response => {
//             store.Contact.map = {};
//             done();
//           })
//           .catch(err => {
//             console.log(err);
//             done();
//           });
//         break;
//       default:
//         done();
//     }
//   },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Contact";
//     render(store[view]);
//   }
// });

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
