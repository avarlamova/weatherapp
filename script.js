new Vue ({
    el: '#app',
    data() {
        return {
        api_key: '2cac64a96a8e9169f0a06a8a52197d1d',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        query: '',
        weather: {},
            }
        },

    computed: {

            time: function () {
                let d = new Date();
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let day = days[d.getDay()];
                let date = d.getDate();
                let month = months[d.getMonth()];
                return `${day} ${date} ${month}`;
            },

            date: function () {
                let t = new Date ();
                let hours = t.getHours();
                let minutes = t.getMinutes();
                return `${hours} ${minutes}`
            },

            isCloudy: function () {
                if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Clouds')
                return true;
            },

            isRainy: function () {
                if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Rain')
                return true;
                },

            isClear: function () {
                if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Clear')
                return true;
                },

            isSnowy: function () {
                if (typeof this.weather.main !='undefined' && this.weather.weather[0].main === 'Snow')
                return true;
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
          }
    },
})

