let searchButton = document.querySelector('#button-search');
let inputKeyword = document.querySelector('.form-control');


searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=98d2916646a49b10ca1a37192f7cdd5d&units=metric")
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperatur dari ${response.main.temp_min}°С sampai ${response.main.temp_max}°С</p>
                                <h5>Kecepatan Awan : ${response.wind.speed} m/s</h5>
                                <h4 style="color: #012443;">Koordinat : [${response.coord.lat}, ${response.coord.lon}]</h4>`
        })
    inputKeyword.value = null;

})