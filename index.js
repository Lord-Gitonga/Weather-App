const output = document.getElementById('output')
const cityName = document.getElementById('city-name')
const searchBtn = document.getElementById('search-btn')


function getDetails(){
    
    let cityDetails = cityName.value;
    
     if(cityDetails.length === 0){
        output.innerHTML = `<h3>Please input a city name</h3>`;
      }
      else{
        const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityDetails}&appid=${apiKey}&units=metric`;
        cityDetails.value = "";
        fetch(myUrl)
        .then(resp=>resp.json())
        .then(data=> {
            output.innerHTML=`
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="weather-description">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp}&#176;</h1>
            <div class="temp-components">
                <div>
                   <h4 class="title">Min Temp</h4>
                   <h4 class = "temperature">${data.main.temp_min}</h4>
                </div>
                <div>
                   <h4 class="title">Max Temp</h4>
                   <h4 class = "temperature">${data.main.temp_max}</h4>
                </div>
            </div>
            `
        }).catch(()=>{
            output.innerHTML = `
            <h3>City name is not valid</h3>`
        })
      }
}
//getDetails();
searchBtn.addEventListener('click', getDetails)
