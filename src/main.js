import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import '@/shared/index.scss';
import '@/shared/shadows.scss';


import Vue from 'vue';

import AppRoot from '@/views/AppRoot';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<AppRoot />',
  components: { AppRoot },
});