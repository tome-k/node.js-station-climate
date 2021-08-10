console.log("Client side Js file is loaded");

const url = "http://localhost:3000/weather?address=boston";
fetch(url).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
