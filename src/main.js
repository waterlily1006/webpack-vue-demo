import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.scss'

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: (createElement) => createElement(App),
})
