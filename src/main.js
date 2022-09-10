import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import { MotionPlugin } from '@vueuse/motion'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import { vfmPlugin } from 'vue-final-modal'

Vue.use(vfmPlugin)
Vue.use(Vuelidate)
Vue.use(Toasted,{duration: 10000, keepOnHover: true, position: "top-right", fullWidth:true, theme:"toasted-primary", singleton:true, });
Vue.use(MotionPlugin)
Vue.config.productionTip = false
Vue.use(axios)
new Vue({
  render: h => h(App),
}).$mount('#app')