new Vue ({
    el: '#app',
    data() {
        return {
        api_key: '2cac64a96a8e9169f0a06a8a52197d1d',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {},
        time_api_key: 'VU47ZXF8EZ0D',
        time_url: 'http://api.timezonedb.com/v2.1/get-time-zone',
        latitude: '',
        longitude: '',
        time: '',
        date: '',
        }
    },

    methods: {
        getWeather () {
    
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
              .then(x => {
                  return x.json();
               }).then(this.setWeather);
          },

        setWeather (results) {
            this.weather = results;

            //setting coordinates for defining time zone
            this.latitude = this.weather.coord.lat;
            this.longitude = this.weather.coord.lon;
            this.getTimeZone();

            //different styles for different weather types

            if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Clouds')
                document.querySelector('body').classList.toggle('cloudy');

            if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Rain')
                document.querySelector('body').classList.toggle('rainy');

            if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Clear')
                document.querySelector('body').classList.toggle('clear');

            if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Snow')
                document.querySelector('body').classList.toggle('snowy');
          },

        getTimeZone () {
            fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${this.time_api_key}&format=json&by=position&lat=${this.latitude}&lng=${this.longitude}`)
            .then(x => {
                return x.json();
             }).then(this.setTimeZone);
        },

        setTimeZone(fetchedTime) {

            let string = JSON.stringify(fetchedTime);
            string = string.substring(string.length-21, string.length-5).split(' ');
            
            this.time = string[1];
            let date = string[0].split('-');

            let year = date[0];
            let month = date[1];
            let day = date[2];
            this.date = day+'-'+month + '-' + year;
        }
    },
})

