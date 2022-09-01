import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import ICONS from '@/icons';

Vue.use (Vuetify, {
  iconfont: 'mdi',
  rtl: false,
  icons: ICONS,
  breakpoint: {
    thresholds: {
      xs: 360,
    },
  },
  options: {
    customProperties: true
  },
  theme: {
    accent: '#028090',
    error: '#E53935',
    info: '#71BCF7',
    success: '#02C39A',
    warning: '#FF9F1C',
    greyDarken3: '#424242',
    green: '#6DCD01'
  }
});
