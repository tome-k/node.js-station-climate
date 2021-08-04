const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Cracow", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(50.051246, 19.948208, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
