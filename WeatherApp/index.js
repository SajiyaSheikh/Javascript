// id =bdde733c9296b7c0b0e0c91dd1921aa4

//const url="https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=bdde733c9296b7c0b0e0c91dd1921aa4";


// async function main()
// {
//    let res= await fetch(url);
// //    console.log(res);
//    let data= await res.json();
//     console.log(data);
// }
// main();

function searchWeather()
{
    //console.log("Inside function")
    let city=document.querySelector("#cityInput").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdde733c9296b7c0b0e0c91dd1921aa4`;
    fetch(url).then(function(res)
{
    return res.json();
}).then(function(res){
   displayData(res);
})

}

function displayData(data)
{
    //console.log(data);
    document.querySelector("#cityInput").value=null;
    let map=document.querySelector(".embed-map-frame");
    let city=document.querySelector(".city-name");
    city.innerText=data.name; 

    let today = new Date();
    let date=document.querySelector(".date-time");
    date.innerText=today.toLocaleString();


    let temp=document.querySelector(".temperature-section>h1");
    temp.innerText=data.main.temp;

    let humidity=document.querySelector("#humidity");
    humidity.innerText=data.main.humidity;

    let wind=document.querySelector("#wind");
    wind.innerText=`${data.wind.speed} km/h`;

    let pressure=document.querySelector("#pressure");
    pressure.innerText=`${data.main.pressure} hPa`;

    let feels_like=document.querySelector("#feels");
    feels_like.innerText=data.main.feels_like;

    let weather_condition=document.querySelector(".weather-condition");
    weather_condition.innerText=data.weather[0].description;

    map.src=`https://maps.google.com/maps?q=${data.name}&z=12&output=embed`;
}
