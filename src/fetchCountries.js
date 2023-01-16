import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v2/name/"
    
    return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
        .then(resp =>
        {
            if (name !== "" && !resp.ok) {
                Notify.failure('Oops, there is no country with that name');
                return
        }
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        }
        )
}

// name.official
// capital
// population
// flags.svg
// languages
