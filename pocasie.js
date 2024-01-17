const apiKey = 'f723bb1303fbae64816727fafb146d30';
const city = 'Ružomberok'; // Nahraďte skutočným názvom mesta
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Funkcia na získanie informácií o počasí z API
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Prevod teploty z kelvínov na stupne Celzia
        const temperatureCelcius = (data.main.temp - 273.15).toFixed(2);

        // Získať URL obrázka počasia
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        // Zkontrolovat, zda existují informace o srážkách
        const rainfall = data.rain ? `${data.rain['1h']} mm` : '0 mm';

        // Spracovanie a zobrazenie informácií o počasí
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p>${data.name}</p>
            <img src="${iconUrl}" alt="Weather Icon">
            <p>Teplota: ${temperatureCelcius} °C</p>
            <p>Vlhkosť: ${data.main.humidity}%</p>
            <p>Zrážky: ${rainfall}</p>
        `;
    } catch (error) {
        console.error('Chyba pri načítaní informácií o počasí', error);
    }
}

// Zavolanie funkcie pre získanie informácií o počasí
getWeather();


