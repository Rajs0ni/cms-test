import Vue from 'vue';
import App from './App.vue';
import './plugins/vuetify';
import router from './router';
import store from '@/store';
import DEFINES from '@/defines';

Vue.prototype.DEFINES = DEFINES;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
