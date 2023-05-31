import Toast from 'react-native-easy-toast';

const TAG = '__API__';
export const showToast = msg => {
  // console.error('ERROR', msg);
  setTimeout(() => {
    Toast.show(getMessage(msg));
  }, 500);

  presentToast(getMessage(msg));
};
export const showGlobalToast = msg => {};
export const presentToast = message => {
  console.log('=== in  presentToast ', message);
  // EventRegister.emit(events.showToast, getMessage(message));
};
export const handleResponse = ({response, jsonResponse}) => {
  switch (response.status) {
    case 200:
    case 201: {
      if (
        jsonResponse.hasOwnProperty('errors') ||
        jsonResponse.hasOwnProperty('error')
      ) {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      } else {
        return Promise.resolve(jsonResponse);
      }
      break;
    }
    case 401: {
      // EventRegister.emit(events.logout);
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
    case 403: {
      // EventRegister.emit(events.logout);
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
    case 404: {
      // EventRegister.emit(events.logout);
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const log = (label, data) => {
  if (__DEV__) {
    console.log(TAG + `__${label}__ :`, data);
  }
};
export const message = 'Something went wrong';
export const getMessage = json => {
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};