const apikey="8c61c22935999897fcfe3e3843eabafa";

const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const city = document.getElementById("enteredcity");


const weatherimg = document.getElementById("myrain");

// const weathericon =document.querySelector(".rain");

 
async function fetchdata(city){

    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    if(response.status==404){

        document.getElementById("myerror").style.display="block";
        document.getElementById("myweather").style.display="none";



    }else{

        document.getElementById("myh2").textContent=data.name;
       document.getElementById("wh1").textContent=Math.round(data.main.temp) + `°c`;
       document.getElementById("humidper").textContent=data.main.humidity +"%";
    document.getElementById("mywindspeed").textContent=data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherimg.src="images/clouds.png";

    }else if(data.weather[0].main == "Drizzle"){
        weatherimg.src="images/drizzle.png";

    }else if(data.weather[0].main == "Snow"){
        weatherimg.src="images/snow.png";

    }else if(data.weather[0].main == "Mist"){
        weatherimg.src="images/mist.png";

    }else if(data.weather[0].main == "Clear"){
        weatherimg.src="images/clear.png";

    }
    

    }

    
   

}


document.getElementById("search").onclick=function(){

document.getElementById("myweather").style.display="block";


    
fetchdata(city.value);
    
 }


