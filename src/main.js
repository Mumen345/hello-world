import Vue from 'vue'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'


Vue.use(MotionPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
