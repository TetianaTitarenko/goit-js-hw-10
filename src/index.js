import './css/styles.css';
import debounce from "lodash.debounce"
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from "./fetchCountries"

const DEBOUNCE_DELAY = 300;
const list = document.querySelector(`.country-list`);
const input = document.querySelector(`#search-box`);
console.log(input)

input.addEventListener(`input`, debounce(onInput, DEBOUNCE_DELAY))

function onInput(evt) {
    const nameInput = evt.target.value;
    console.log(nameInput);

    fetchCountries().then(data => createMarkup(data));
    
    // fetchCountries().then(data => {
    //     if (data.length === 1) {
    //         return createCountryMarkup(data);
    //     }
    //     if (data.length > 0 && data.length < 10) {
    //         return createMarkup(data)
    //     }
    //     if (data.length = 0) {
    //         Notify.failure('Oops, there is no country with that name');
    //     }
    //     if (data.length > 10) {
    //         Notify.info('Too many matches found. Please enter a more specific name.');
    //     }
    // } 
}



function createMarkup(arr) {
    const markup = arr.map(({
        name,
        flags,}) => 
        
        `<li>
        <img src="${flags.svg}" alt="" width = 60/>
        <h2>${name}</h2>
        </li>`).join(``)
    list.insertAdjacentHTML(`beforeend`, markup)
}

function createCountryMarkup(el) {
    const markup = el(({
        name,
        capital,
        population,
        flags,
        languages }) => 
        
        `<li>
        <img src="${flags.svg}" alt="" width = 60/>
        <h2>${name}</h2>
        <h3>${capital}</h3>
        <h3>${population}</h3>
        <h3>${languages[0].name}</h3>
        </li>`).join(``)
    list.insertAdjacentHTML(`beforeend`, markup)
}

