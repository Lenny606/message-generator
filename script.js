import { data } from "./data.js"

const displayCountry = document.querySelector(".message_country")
const displayRegion = document.querySelector(".message_region")
const displayCurrency = document.querySelector(".message_currency")
const btn = document.querySelector(".btn_action")
let randomIndex = null;

function setRandomState() {
    displayCountry.innerHTML = "<em><u>Country:</u></em> " + data[randomIndex].country
    displayRegion.innerHTML = "<em><u>Region:</u></em> " + data[randomIndex].region
    displayCurrency.innerHTML = "<em><u>Currency:</u></em> " + data[randomIndex].currency
    console.log(data[randomIndex]);

}

function createRandomIndex() {
    randomIndex = Math.floor(Math.random() * 100)
}
console.log(data);

btn.addEventListener('click', () => {
    console.log('click');
    createRandomIndex()
    setRandomState()
    console.log(randomIndex);
})