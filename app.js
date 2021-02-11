const input = () => {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput == "") {
        alert("SORRY SIR, AT FIRST INPUT YOUR CITY NAME");

    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=c353cb8d347d6fea12bf0a7afa191d63`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data));
    }
}
const displayWeather = weather =>{
    console.log(weather);
        const songContainer = document.getElementById("weather-container");

        songContainer.innerHTML= `
        <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" alt="">
            <h1>${weather.name}</h1>
            <h3><span>${weather.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${weather.weather[0].description}</h1>
        
        `
}
