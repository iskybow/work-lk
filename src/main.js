import Vue from 'vue'
import './plugins/vuetify'
import App from './Routing.vue'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
