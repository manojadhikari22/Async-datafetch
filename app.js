//Using Axois
/*const fetchData = async () => {
    axios.get('https://swapi.dev/api/people')
    .then(data => console.log(data))
};
fetchData()*/


//using fetch
/*fetch('https://swapi.dev/api/species')
.then((response) => {
    return response.json();
})
.then(data =>console.log(data))// if i want just results to show me, i can use (data.results)
.catch(error => console.log(error))//to check the error*/


/*fetch('https://swapi.dev/api/people')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.results.forEach(person => {
      console.log(person.name);
    });// for each method is using to get the only name of all the persons in the array.
  })
  .catch(error => {
    console.error(error);
  });*/

//OR
//fetch('https://swapi.dev/api/species')
//.then(response =>  response.json());



// Using Asynch
/*const fetchData = async () => {
   const response = await fetch('https://restcountries.com/v3.1/name/nepal?fullText=true')
   const data = await response.json();
   console.log(data[0].name)*/
   /*console.log(data[0].name)
   data.forEach(country =>{
        console.log(country.name)
   });*/

   /*const response2 = await fetch('https://restcountries.com/v3.1/capital/kathmandu')
   const data2 = await response2.json();
   console.log(data2[0].capital)
   
   const response3 = await fetch('https://restcountries.com/v3.1/region/asia')
   const data3 = await response3.json();
   //console.log(data[0].name)
   data3.forEach(region =>{
        console.log(region.name)
   });

   const response4 = await fetch('https://restcountries.com/v3.1/currency/nepal')
   const data4 = await response4.json();
   console.log(data4[0].currencies)
};
fetchData()*/

const fetchCountryData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/nepal')
    const data = await response.json();
    //console.log(data)
    renderData(data)
};
fetchCountryData()

//Render the data
const renderData = (data) => {
    const countryData = data[0];


// Creating Elements
const countryName = document.createElement('li')
const countryPopulation = document.createElement('li')
const countryRegion = document.createElement('li')
const countryCurrency = document.createElement('li')
const countryCapital = document.createElement('li')

//Appending Elements
const ul = document.querySelector('ul');
ul.append(countryName,countryRegion,countryCapital,countryCurrency,countryPopulation)

//Feeling Elements
countryName.textContent = countryData.name.common
countryCapital.textContent = countryData.capital
countryPopulation.textContent = countryData.population
countryRegion.textContent = countryData.continents
countryCurrency.textContent = countryData.currencies.NPR.name
}



