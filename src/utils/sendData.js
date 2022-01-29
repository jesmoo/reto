import axios from 'axios';
const URL = 'https://frontend-recruiting.100ladrillos.com/';
const proxy = 'https://thingproxy.freeboard.io/fetch/';

const sendData = async (datas, route, tokens) => {
  const tokensData = tokens;

  if (tokensData) {
    axios.defaults.headers.post['Authorization'] = `Bearer ${tokensData.main}`;
    // axios.defaults.headers.common['Authorization'] = tokensData.main;
    // Axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

    // axios.defaults.xsrfHeaderName = tokensData.header;
    // axios.defaults.xsrfCookieName = tokensData.main;
  }
  const sendURL = `${URL}${route}`;

  await axios.interceptors.request.use(
    function (config) {
      let token = window.localStorage.getItem('accessToken');
      console.log(token);
      if (token) {
        config.headers.accessToken = token;
        return config;
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  await axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const statusAxios = error.response.status;
      switch (statusAxios) {
        // authentication (token related issues)
        case 401:
          alert(error.message);
          window.location.href = '/';
          break;

        // forbidden (permission related issues)
        case 403:
          alert(error.response.message);
          window.location.href = '/';
          break;

        // bad request
        case 400:
          alert(error.response.message);
          window.location.href = '/';
          break;

        // not found
        case 404:
          alert(error.response.message);
          window.location.href = '/';
          break;

        // conflict
        case 409:
          alert(error.response.message);
          window.location.href = '/';
          break;

        // unprocessable
        case 422:
          alert(error.response.message);
          window.location.href = '/';
          break;

        // generic api error (server related) unexpected
        default:
          alert(error.response.message);
          window.location.href = '/';
          break;
      }
    }
  );

  const response = await axios
    .post(`${proxy}${sendURL}`, datas)
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export default sendData;
