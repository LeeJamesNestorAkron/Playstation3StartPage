function someTime(){
    const theTime = new Date();
    document.getElementById("InfoTime").innerHTML = theTime.toLocaleDateString() + " " + theTime.toLocaleTimeString(); 
    setTimeout(someTime,1000);
 return;
}

function WeatherInput(data){

    const theTime = new Date();
    var sunRiseUTC = data.sys.sunrise;
    var sunSetUTC = data.sys.sunset;
    var sunRise = new Date(sunRiseUTC * 1000);
    var sunSet = new Date(sunSetUTC * 1000);
    var sunRiseFormatted = sunRise.toLocaleTimeString();
    var sunSetFormatted = sunSet.toLocaleTimeString();

    var WeatherIcon = data.weather[0].icon;
    var WeatherIconUrl = "http://openweathermap.org/img/w/" + WeatherIcon + ".png";


    document.getElementById("Environment").innerHTML =
      "<div>" + data.name + ", " + data.weather[0].description + ", " + data.main.temp + "F°</div>" ;

    document.getElementById("WeatherTemperature").innerText = 
    " Temperature is " + data.main.temp + "F°, feels like " + data.main.feels_like +
     "F°, mininum of " +  data.main.temp_min + "F°, maximum of " + data.main.temp_max + "F°.";

     document.getElementById("WeatherWNH").innerText = 
     "Windspeed of " + data.wind.speed + "MPH, gustspeeds of " + data.wind.gust + "MPH, with a direction of " +
     data.wind.deg + "°. Humidity of " + data.main.humidity + "%.";

     document.getElementById("WeatherWeather").innerText = "Weather is " + data.weather[0].description +
     " with a cloudiness of " + data.clouds.all + "%. Visibility is " + (data.visibility - (data.visibility % 1000))/ 1000 + "km.";
    document.getElementById("WeatherSun").innerText =
    "Sunrise at " + sunRiseFormatted + ".\n Sunset at " + sunSetFormatted + ".";
    console.log(WeatherIconUrl);
    document.getElementById("weatherIcon").src = WeatherIconUrl;

    setTimeout(someTime,1000);
 return;
 
}

function isOverFlow(element, top){
    console.log("hello");
    var width = element.offsetWidth;
    var x = element.getBoundingClientRect();
    var viewPortWidth = window.innerWidth;
    var jut = x.x + width;
    console.log( jut > viewPortWidth);
    console.log(element.style.left);
    if((jut) > viewPortWidth){
        top.classList.remove('title-left');
        top.classList.add('title-right');
        element.classList.remove('descriptor-left');
        element.classList.add('descriptor-right');
    }
    return  element.scrollWidth> element.clientwidth;
    
}


   


