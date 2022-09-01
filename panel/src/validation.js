export default {
  required: value => !!value || 'Field is required',
  min_length: length => {
    return function (value) {
      if (value && value.length < length) {
        return 'Minimum length ' + length + ' is required';
      }
      return true;
    };
  },
  max_length: length => {
    return function (value) {
      if (value && value.length > length) {
        return 'Maximum length reached';
      }
      return true;
    };
  },
};
