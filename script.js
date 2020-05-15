new Vue ({
    el: '#app',
    data() {
        return {
            api_key: '2cac64a96a8e9169f0a06a8a52197d1d',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: 'Kiev,UA',
      weather: {},
      locationFound: null,
      city: '',
      state: ''
        }
    },
    methods: {
        getWeather () {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
              .then(x => {
                console.log (x.json());
     //         }).then(this.setResults);
          }
        
)
    },
    
},
})
