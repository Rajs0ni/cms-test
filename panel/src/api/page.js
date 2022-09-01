import * as ApiManager from './_manager';

export const page = {
  create: (payload = null) => {
    return ApiManager.callApi(
      `/admin/page/create`,
      payload
    );
  },

  get: (payload = null) => {
    return ApiManager.callApi(
      `/admin/page/get`,
      payload
    );
  },

  list: payload => {
    return ApiManager.callApi(
      `/admin/page/list`,
      payload
    );
  },

  delete: payload => {
    return ApiManager.callApi(
      `/admin/page/${payload.id}/delete`,
      payload
    );
  },

  update: payload => {
    return ApiManager.callApi(
      `/admin/page/` +
        payload.id +
        `/update`,
      payload
    );
  },
};
