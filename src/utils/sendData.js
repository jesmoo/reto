const sendData = async (datas) => {
  const URL = 'https://frontend-recruiting.100ladrillos.com/';
  const sendURL = `${URL}api/singUp`;
  const data = datas;
  const sendMethod = {
    mode: 'no-cors',
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(sendURL, sendMethod);

  if (!response.ok) {
    const { url, status, statusText } = response;
    if (status === 0) {
      alert('error');
    }
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
  const result = await response.json();

  return result;
};
export default sendData;
