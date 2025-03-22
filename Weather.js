document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = 'a0aca8a89948154a4182dcecc780b513';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found!');
                return;
            }

            document.getElementById('city-name').innerText = data.name;
            document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            alert('Error fetching weather data.');
            console.error(error);
        });
});
