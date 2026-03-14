import "./css/global.css";
import "./css/header.css";
import "./css/main.css";
import "./css/footer.css";
import "./css/card.css";

const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey = "WVN8JN95R23UXWQRYHX45JRGS";
const unitGroup = "?unitGroup=metric&key=";

const city = "london";

const completeUrl = url + city + unitGroup + apiKey;

const parseApiResponse = async () => {

    try {

        // a PROMISE from the API that resolves a response object
        const response = await fetch(completeUrl);
        // a promises - parses that resolved response (the body) from the fetch
        // to a js object, without the ok (status) and so on
        const data = await response.json();
        console.log(data);

        const temperature = data.currentConditions.temp;
        console.log(temperature);

        const feelsLike = data.currentConditions.feelslike;
        console.log("Feels like: " + feelsLike);

        const humidity = data.currentConditions.humidity;
        console.log("Humidity: " + humidity);

        const wind = data.currentConditions.windspeed;
        console.log("Wind: " + wind);

    } catch(errorMessage) {

        console.log(errorMessage);
    }
}

parseApiResponse();