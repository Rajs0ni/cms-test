import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

//importing modules
import page from './modules/page';
import app from './modules/app';

Vue.use (Vuex);

export default new Vuex.Store ({
    state: {},
    actions: {},
    modules: {
        page,
        app
    },
    plugins: [
        createPersistedState ({
          key: 'app-cms-test',
        }),
    ],
});
