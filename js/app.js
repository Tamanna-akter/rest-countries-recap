const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    //console.log(countries);
    const allCountriesHtml = countries.map(country => getCountryHtml(country));
    console.log(allCountriesHtml);
}


const getCountryHtml = country => {
    return `
    <div>
    <h2> ${country.name.common}</h2>
    </div>
    `
}
loadCountries();