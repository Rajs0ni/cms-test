import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

//importing modules
import app from './modules/app';
import page from './modules/page';

Vue.use (Vuex);

export default new Vuex.Store ({
  state: {},
  actions: {    
  },
  modules: {
    app,
    page
  },
  plugins: [
    createPersistedState ({
      key: 'cms-test',
      paths: ['app', 'page'],
    })
  ],
});
