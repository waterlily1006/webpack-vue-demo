import Vue from 'vue'
import app from './app.vue'

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: (createElement) => createElement(App),
})
