import { openNotificationWithIcon } from 'app/components/notifications/notifications';
import axios from 'axios';
export const requestHandling = (url, mathod, data?, notification?) => {
  let { title = '', success = '', failure = '' } = notification || {};
  const options = {
    url: url,
    method: mathod,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: data,
  };
  return axios(options)
    .then(response => {
      const { data, error } = response.data || {};
      if (error) {
        title &&
          openNotificationWithIcon('error', title, failure || error.message);
        throw error;
      }
      title && openNotificationWithIcon('success', title, success);
      return data;
    })
    .catch(error => {
      if (!error) throw error;
      const { response, message } = error;
      if (message === 'Network Error') {
        failure = 'The operation failed';
        openNotificationWithIcon('error', title, failure || error.message);
        throw error;
      }

      const { err = null } = response;
      if (err && title) {
        openNotificationWithIcon('error', title, failure || error.message);
      }
    });
};
