import Vue from 'vue'
import './plugins/vuetify'
import App from './Routing.vue'
import router from './router'
import ImageUploader from 'vue-image-upload-resize'
import store from './store'
Vue.use(ImageUploader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
