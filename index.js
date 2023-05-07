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

Promise.all([
  axios.get(
    `https://www.mapquestapi.com/staticmap/v5/map?key=${process.env.MAP_QUEST_API}&center=Gorham,ME&size=600,400@2x
    ,`
  ),
  // axios.post(`${process.env.MAP_QUEST_API}/map`, requestData),
])

  .then((response) => {
    console.log(response);

    }, );




  // .catch((error) => {
  //   console.log("It puked", error);
  // });

if (state.view === "Contact") {
/*
Please refer to the documentation:
https://developer.mapquest.com/documentation/mapquest-js/v1.3/
*/

L.mapquest.key = process.env.MAP_QUEST_API;

let map = L.mapquest.map("Contact",{
  // street: '200 Narragansett Street',
  // city: 'Gorham',
  // state: 'ME',
  // postalCode: '04038'
  center: [42.361145, -71.057083],
      layers: L.mapquest.tileLayer("map"),
      zoom: 11,
      zoomControl: true,
});




// map.addControl(L.mapquest.satelliteControl());
map.addControl(L.mapquest.control());
{
map.addControl(
L.mapquest.geocodingControl({
  position: "topleft",
})
)};

