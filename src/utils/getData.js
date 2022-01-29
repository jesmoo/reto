import axios from 'axios';
const URL = 'https://frontend-recruiting.100ladrillos.com/';
const proxy = 'https://thingproxy.freeboard.io/fetch/';

const getData = async (route, tokens) => {
  const tokensData = tokens;
  if (tokensData) {
    axios.defaults.xsrfHeaderName = tokensData.header;
    axios.defaults.xsrfCookieName = tokensData.main;
  }
  const sendURL = `${URL}${route}`;

  const response = await axios.get(`${proxy}${sendURL}`).catch((err) => {
    console.log(err);
  });

  return response;
};

export default getData;
