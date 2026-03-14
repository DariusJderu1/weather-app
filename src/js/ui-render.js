import { apiResponse } from "./form-api-result.js";
import { formatCityName } from "./helper.js";

const divContentContainer = document.getElementById("content-container");
const form = document.querySelector("form#city-form");
const searchInput = document.getElementById("search-input");



export const startApplication = () => {

    form.addEventListener("submit", async (event) => {

        event.preventDefault();
        divContentContainer.innerHTML = "";

        try {

            const formattedCity = formatCityName(searchInput.value);
            const values = await apiResponse(formattedCity);

            // div.cardContainer
            const divCardContainer = document.createElement("div");
            divCardContainer.classList.add("card-container");

            // append the card container to the main container
            divContentContainer.appendChild(divCardContainer);

            // h2
            const h2 = document.createElement("h2");
            h2.innerText = formattedCity;
            divCardContainer.appendChild(h2);

            // p.temperature
            const pTemperature = document.createElement("p");
            pTemperature.classList.add("temperature");
            pTemperature.innerText = `${values.temperature}°C`;
            divCardContainer.appendChild(pTemperature);

            // p feels like
            const pFeelsLike = document.createElement("p");
            pFeelsLike.innerText = `Feels like: ${values.feelsLike}°C`;
            divCardContainer.appendChild(pFeelsLike);

            // p humidity
            const pHumidity = document.createElement("p");
            pHumidity.innerText = `Humidity: ${values.humidity}%`;
            divCardContainer.appendChild(pHumidity);

            // p wind
            const pWind = document.createElement("p");
            pWind.innerText = `Wind: ${values.wind} km/h`;
            divCardContainer.appendChild(pWind);

        } catch(error) {

            // div.cardContainer
            const divCardContainer = document.createElement("div");
            divCardContainer.classList.add("card-container");

            // append the card container to the main container
            divContentContainer.appendChild(divCardContainer);

            // h2
            const h2 = document.createElement("h2");
            h2.innerText = error.message;
            divCardContainer.appendChild(h2);

        } finally {

            // reset the form
            form.reset();
        }
    });
};

/*
<div class="card-container">
    <h2>Drobeta-Turnu Severin</h2>
    <p class="temperature">7.95 °C</p>
    <p>Fells like: 6.58 °C</p>
    <p>Humidity: 55 %</p>
    <p>Wind: 2.26 km/h</p>
</div>
*/