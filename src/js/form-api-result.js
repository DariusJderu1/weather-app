const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey = "WVN8JN95R23UXWQRYHX45JRGS";
const unitGroup = "?unitGroup=metric&key=";

const apiResponse = async (cityName) => {

    const completeUrl = url + cityName + unitGroup + apiKey;

    // returns a PROMISE from the API that resolves a response object
    const response = await fetch(completeUrl);

    if(!response.ok)
        throw new Error("City not found!");

    // parses that resolved response (the body) from the fetch
    // to a js object (without the ok ( the status) and so on)
    const data = await response.json();

    const temperature = data.currentConditions.temp;
    const feelsLike = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const wind = data.currentConditions.windspeed;

    return {

        temperature,
        feelsLike,
        humidity,
        wind
    };
};

export { apiResponse };