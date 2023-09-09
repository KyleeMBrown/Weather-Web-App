
const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = "f39486461f629df503c501a251c0df73"



function checkWeather () {

    /**grab input */
    const zipCode= document.getElementById('zip-code').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode}&appid=${apiKey}&units=imperial&lang=en`)
        .then(response=> response.json())
        .then(data => {
            
            /** Get all elements */
            const weatherInfo = document.getElementById("w-info");
            const temperature= document.getElementById('temp');
            const feelsLike = document.getElementById('feelslike');
            const cloudiness = document.getElementById('cloudiness');
            const windiness = document.getElementById('winds');
            const humidity = document.getElementById('humidity');
            const name = document.getElementById('name');
            const description = document.getElementById('description');
            
            
            /** Get all elements */

            /*use the API icon*/ 
            const icon = document.getElementById('icon')
            const img = document.getElementById('image');
            /*API path for icon code*/ 
            const iconCode = data.weather[0].icon;
            /**Change the img source attribute using .src */
            img.src = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
            /** use the API icon */

            /**Print chosen parameters out */
            
            description.innerHTML= data.weather[0].description;
            name.innerHTML= data.name;
            humidity.innerHTML= "Humidity: " + data.main.humidity + "%";
            windiness.innerHTML= "Wind Speed: " + data.wind.speed + "mph";
            cloudiness.innerHTML= "Cloudiness: " + data.clouds.all + "%";
            feelsLike.innerHTML= "Feels Like: " + data.main.feels_like + "°F";
            temperature.innerHTML= "Temperature: " + data.main.temp + "°F";
            weatherInfo.style.display = "flex";
             /**Print Them out */
            
            console.log(data);
        })
            
        .catch(err => console.log(err))
    }     


