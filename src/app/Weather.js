export class Weather {
    
    constructor(city, countryCode){
        this.apiKey = '283f0c0aef46a0f78a76e353f1479fdb';
        this.city = city;
        this.countryCode = countryCode;
    }

   async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city,countryCode){
        this.city = city;
        this.countryCode = countryCode;


    }
}