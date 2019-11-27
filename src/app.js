import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      exchangeRates:[],
      exchangeAmount: 0,
      selectedCurrency: {},
      exchangeAmountToEuro: 0,
      selectedCurrencyToEuro: {},

    },
    computed: {
      exchangeEuroToCurrency: function () {
        const value = this.exchangeAmount * this.selectedCurrency
        return value.toFixed(2);
      },
      exchangeCurrencyToEuro: function () {
        const value = this.exchangeAmountToEuro/this.selectedCurrencyToEuro
        return value.toFixed(2);
      }

    },
    mounted(){
      this.fetchConverter();
    },
    methods: {
      fetchConverter: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data )
        .then(data => this.exchangeRates = data.rates)
      }
      // exchangeEuroToCurrency: function () {
      //   return this.exchangeAmount * this.selectedCurrency.value;

      // }
    }
  })
})
