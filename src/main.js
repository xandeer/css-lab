import 'normalize.css'

import './styles/base.styl'

import Vue from 'vue'

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
