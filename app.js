const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=289ddf43e348b124b6778985d3f2aeb1&query=50.0833,19.9167";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees It's feels like ${response.body.current.feelslike} degrees out`
//     );
//   }
// });

// const geocodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Cracow.json?access_token=pk.eyJ1IjoibWFyaW9nOCIsImEiOiJja2h4dWM2OWsyYTEyMnBremFqZWtndG1yIn0.QYO6wIwORgwu8ohFAXTsEw&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services!");
//   } else if (response.body.features === 0) {
//     console.log("Unable to find location try another search!");
//   } else {
//     const lat = response.body.features[0].center[1];
//     const lng = response.body.features[0].center[0];
//     console.log(`${lat} ${lng}`);
//   }
// });

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
