let weather = {
    "apiKey": "0f002a5dc84ab64ec8dbabb017c8b58f",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=matric&appid=" 
            + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const {speed } = data.wind;
        document.querySelector(".w-city").innerText = "Weather in " + name;
        document.querySelector(".w-icon").src =
         "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".w-description").innerText = description;
        document.querySelector(".w-temp").innerText = Math.round(temp/7) + "°C";
        document.querySelector(".w-humidity").innerText = "Huminidy: "
         + humidity + "%";
        document.querySelector(".w-wind").innerText = "Wind speed: " + speed + "%";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".w-search-bar").value)
    }
};
document
    .querySelector(".w-search button")
    .addEventListener("click", function() {
        weather.search();
});   
document.querySelector('.p-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.w-card').classList.toggle('dark');
    document.querySelector('.p-box').classList.toggle('dark');
    document.querySelector('.p-power').classList.toggle('dark');
    document.querySelector('.p-button').classList.toggle('dark');
    document.querySelector('.w-button').classList.toggle('dark');
    document.querySelector('.w-search-bar').classList.toggle('dark');
    document.querySelector('.p-card').classList.toggle('dark');
    document.querySelector('.p-card2').classList.toggle('dark');
    document.querySelector('.p-card3').classList.toggle('dark');
    document.querySelector('.p-mess').classList.toggle('dark');
    document.querySelector('.p-icon').classList.toggle('dark');
    document.querySelector('.p-icon2').classList.toggle('dark');
})
