import './css/styles.css';

// import {fetchCountries} from "./fetchCountries"
function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v3.1/name/all"
    
    return fetch(`${BASE_URL}?fields=${name},capital,population,flags,languages`)
        .then(resp => console.log(resp))
}
fetchCountries()

const DEBOUNCE_DELAY = 300;
