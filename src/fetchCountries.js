export function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v3.1/name/all"
    
    return fetch(`${BASE_URL}?fields=${name},capital,population,flags,languages`)
        .then(resp => console.log(resp)
        // {
            // if (!resp.ok) {
            //     throw new Error(resp.statusText)
            // }
            // return resp.json()
            
        // }
        )
}

// name.official
// capital
// population
// flags.svg
// languages
// fields=name.official,capital,population,flags.svg,languages
