import Vue from 'vue'
import App from './App.vue'
import VeeUI from 'veeui-vue';
import 'veeui-vue/dist/veeui-vue.css'
Vue.use(VeeUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
