new Vue ({
    el: '#app',
    data() {
        return {
            api_key: '2cac64a96a8e9169f0a06a8a52197d1d',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      locationFound: null,
      skycons: new Skycons({"color":"orange"}),
      city: '',
      state: ''
        }
    }
})