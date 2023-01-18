import './css/styles.css';
import debounce from "lodash.debounce"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from "./fetchCountries"

const DEBOUNCE_DELAY = 300;
const list = document.querySelector(`.country-list`);
const input = document.querySelector(`#search-box`);
console.log(input)

input.addEventListener(`input`, debounce(onInput, DEBOUNCE_DELAY))

function onInput() {
    const nameInput = input.value.trim();
    if (!nameInput) {
        return
    }
    
    console.log(nameInput);
     
    fetchCountries(nameInput).then(data => {
        list.textContent = "";
        if (data.length > 10) {
            return Notify.info('Too many matches found. Please enter a more specific name.');
        }
        if (data.length === 1) {
            return list.innerHTML = createCountryMarkup(data);
        }
        if (data.length > 0 || data.length <= 10) {
            return list.innerHTML = createMarkup(data);
        }
    }) 
        .catch(error => console.log(error));

}



function createMarkup(arr) {
    return arr.map(({
        name,
        flags,}) => 
        
        `<li>
            <img src="${flags.svg}" alt="${name}" width="30", height="20">&nbsp<b><BIG>${name}</BIG></b>
        </li>`).join(``)
}

function createCountryMarkup(el) {
        return el.map(({
        name,
        capital,
        population,
        flags,
        languages }) => 
        
        `<li>
        <img src="${flags.svg}" alt="${name}" width="30", height="20">&nbsp<b><BIG>${name}</BIG></b>
        <p><b><span>Capital: </span></b>${capital}</p>
        <p><b><span>Population: </span></b>${population}</p>
        <p><b><span>Languages: </span></b>${languages[0].name}</p>
        </li>`).join(``)
}

