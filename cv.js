const sendButton = document.querySelector('.s-button');
const addLoading = () => {
    sendButton.classList.toggle('on')
}
const removeLoading = () => {
    sendButton.classList.toggle('on')
}
const handleSubmit = () => {
    event.preventDefault();

    const name = document.querySelector('.p-name').value;
    const message = document.querySelector('.p-mess').value;
    if (name === '' && message === '') {
        document.querySelector('.p-name').placeholder = 'Please your name here';
        document.querySelector('.p-name').classList.toggle('on');
        document.querySelector('.p-mess').placeholder = 'And your message here';
        document.querySelector('.p-mess').classList.toggle('on');
    } else if (message == '') {
        document.querySelector('.p-mess').placeholder = 'Please fill out here';
        document.querySelector('.p-mess').classList.toggle('on');
    } else if (name === '') {
        document.querySelector('.p-name').placeholder = 'Please fill out here';
        document.querySelector('.p-name').classList.toggle('on');

    } else {
        addLoading()
        fetch('https://api.sheetmonkey.io/form/5JC1FLW6JtDGanuPjScjuZ', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message}),
        }).then(() => {
            alert('Thank you for the message!!!')
            removeLoading()
        });
    }
}
document.querySelector('form').addEventListener('submit', handleSubmit)

let weather = {
    "apiKey": "0f002a5dc84ab64ec8dbabb017c8b58f",
    fetchWeather: function (city) {
        if (city !== '') {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q="
                + city 
                +"&units=matric&appid=" 
                + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
        } else {
            document.querySelector('.w-search-bar').placeholder = 'Please find your weather here';
            document.querySelector('.w-search-bar').classList.toggle('on');
        }
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
        document.querySelector('.w-search-bar').style.marginTop = '15%';
        document.querySelector('.w-button').style.marginTop = '15%';
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
    document.querySelector('.s-button').classList.toggle('dark');
    document.querySelector('.w-search-bar').classList.toggle('dark');
    document.querySelector('.p-card').classList.toggle('dark');
    document.querySelector('.p-card2').classList.toggle('dark');
    document.querySelector('.p-card3').classList.toggle('dark');
    document.querySelector('.p-mess').classList.toggle('dark');
    document.querySelector('.p-name').classList.toggle('dark');
    document.querySelector('.p-icon').classList.toggle('dark');
    document.querySelector('.p-icon2').classList.toggle('dark');
})

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startMarioButton = document.querySelector('.start-mario')

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}
document.addEventListener('keydown', jump); 

const startMario = () => {
    document.querySelector('.start')

    pipe.style.animation = '';
    pipe.style.left = '';

    mario.style.animation = '';
    mario.style.bottom = '';

    mario.src = "https://gamerview.uai.com.br/wp-content/uploads/2019/12/mario-gif.gif";
    mario.style.width = '130px';
    mario.style.marginLeft = '50px'

    startMarioButton.style.opacity = '0';

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace
        ('px', '');

        if (pipePosition <= 140 && pipePosition > 0 && marioPosition < 10) {
    
            pipe.style.animation = 'none';
            pipe.style.left = '${pipePosition}px';
    
            mario.style.animation = 'none';
            mario.style.bottom = '${marioPosition}px';
    
            mario.src = "https://static-cdn.jtvnw.net/jtv_user_pictures/f211ee29-d58e-41bb-be32-0e949b4f416d-profile_image-300x300.png";
            mario.style.width = '80px';
            mario.style.marginLeft = '50px'

            startMarioButton.src ="/mario pics/kindpng_791506.png";
            startMarioButton.style.opacity = '0.5';
            startMarioButton.style.height = '33px';
            clearInterval(loop);

        }
    
    }, 10)
}
