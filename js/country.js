function reqListener() {
    const countryArr = JSON.parse(this.responseText);
    //a.Get all the countries from Asia continent / region using Filter method.
    const filterAsianCountry = countryArr.filter((country) => country.region.toLowerCase() == "asia");
    console.log("filterAsianCountry", filterAsianCountry);


    //b.Get all the countries with a population of less than 2 lakhs using Filter method. 
    const filterPopulationLessThanTwoLakhs = countryArr.filter((country) => country.population < 200000);
    console.log("filterPopulationLessThanTwoLakhs", filterPopulationLessThanTwoLakhs);

    //c.Print the followin details name, capital, flag, using forEach method.
    countryArr.forEach(function (item) {
        console.log("Name: ", item.name.common, ", Flag: ", item.flag, ", Captial: ", item.capital);
    });

    //d.Pront the total population of countries using reduce method.
    const totalPopulation = countryArr.reduce(
        (accumulator, country) => accumulator + country.population,
        0
    );

    console.log("TotalPopulation", totalPopulation);

    //e.Print the country that uses US dollars as currency.
    
    const usDollarsAsCurrency = countryArr.filter((country) =>
        country.currencies && Object.keys(country.currencies) == "USD"
    );

    // Log the filtered countries.
    console.log("Countries with USD as currency:", usDollarsAsCurrency);
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();