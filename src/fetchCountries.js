export function fetchCountries(name) {
    const BASE_URL = "https://restcountries.com/v2/name/all"
    
    return fetch(`${BASE_URL}?${name}=${name}name.official&capital=capital&population=population&flags=flags.svg&languages=languages`)
        .then(resp =>
        {
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
