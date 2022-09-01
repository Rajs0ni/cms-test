import {EventBus} from '@/event-bus.js';
import {getField, updateField} from 'vuex-map-fields';

function initialState () {
  return {
    app: {
      layout: 'LAYOUT_GUEST'
    },
  };
}

const state = initialState ();

// actions
const actions = {
  showMessage: (context, payload) => {
    EventBus.$emit ('showMessage', payload);
  },

  hideMessage: context => {
    EventBus.$emit ('hideMessage');
  },

  showLoader (context) {
    EventBus.$emit ('showLoader');
  },

  hideLoader (context) {
    EventBus.$emit ('hideLoader');
  }
};

// getters
const getters = {
  getField,
  appLayout: state => state.app.layout
};

// mutations
const mutations = {
  updateField,
  reset (state) {
    // acquire initial state
    const s = initialState ();
    Object.keys (s).forEach (key => {
      state[key] = s[key];
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
