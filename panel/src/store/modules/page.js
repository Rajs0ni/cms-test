import {updateField} from 'vuex-map-fields';
import * as API from '@/api';

function initialState () {
  return {
    list: [],
    page: null,
  };
}

const state = initialState ();

// actions
const actions = {
  async create (context, payload) {
    var response = await API.page.create (payload);
    //update list after page is crated
    await context.dispatch ('list');
    return response;
  },

  async get (context, payload) {
    var page = context.getters['getPage'] (payload.id);
    /* if not in state get from api */
    if (page == undefined) {
      var response = await API.page.get (payload);
      page = response.page;
    }
    return page;
  },

  async delete (context, payload) {
    var response = await API.page.delete (payload);
    return response;
  },

  async list (context, payload) {
    var response = await API.page.list (payload);
    // set pages in list
    context.commit ('set_list', {
      pages: response.pages,
    });
    return response;
  },

  async update (context, payload) {
    var response = await API.page.update (payload);
    await context.dispatch ('list');
    return response;
  },
};

// getters
const getters = {
  getPage: state => id => {
    var page = null;
    if(state.list.data){
      page = state.list.data.find (page => {
        return page.id == id;
      });
    }
    return page;
  },
};

// mutations
const mutations = {
  updateField,
  set_list (state, payload) {
    state.list = payload.pages;
  },
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
