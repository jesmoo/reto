import axios from 'axios';

const sendData = async (datas, route) => {
  const URL = 'https://frontend-recruiting.100ladrillos.com/';
  const sendURL = `${URL}${route}`;
  const proxy = 'https://thingproxy.freeboard.io/fetch/';
  const config = {
    url: `${proxy}${sendURL}`,
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(datas),
  };

  const response = await axios(config).catch((err) => err);

  return response;
};

export default sendData;
