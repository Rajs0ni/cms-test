import {updateField} from 'vuex-map-fields';
import * as API from '@/api';

function initialState() {
  return {
    list: [],
    page: {},
  };
}

const state = initialState();

// actions

const actions = {
  async get(context, payload) {
    var response = await API.page.get(payload);
    context.commit('set_page', {
      page: response.page,
    });
  },

  async list(context, payload) {
    var response = await API.page.list(payload);
    // set pages in list
    context.commit('set_list', {
      pages: response.pages,
    });
    return response;
  },

  resetPage(context, payload) {
    context.commit('reset');
  },
};

// getters
const getters = {
  getPage: (state) => (slug) => {
    var page = null;
    if (state.list) {
      page = state.list.find((page) => {
        return page.slug == slug;
      });
    }
    return page;
  },
};

// mutations
const mutations = {
  updateField,
  set_list(state, payload) {
    state.list = payload.pages;
  },
  set_page(state, payload) {
    state.page = payload.page;
  },
  reset(state) {
    state.list = null;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
