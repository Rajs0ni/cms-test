import * as ApiManager from './_manager';

export const page = {
  get: (payload = null) => {
    return ApiManager.callApi (
      `/guest/page/get`,
      payload
    );
  },

  list: (payload = null) => {
    return ApiManager.callApi (
      `/guest/page/list`,
      payload
    );
  },
};
