import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: []

    },
    mounted(){
      this.fetchConverter();
    },
    methods: {
      fetchConverter: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data )
      }
    }
  })
})
