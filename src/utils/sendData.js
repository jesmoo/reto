const sendData = async (datas) => {
  const URL = 'https://frontend-recruiting.100ladrillos.com/';
  const sendURL = `${URL}api/singUp`;
  try {
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
    if (response.ok) {
      const result = await response.json();
      return result;
      // return <Redirect to="/2/phone'" />;
    }
  } catch (err) {
    console.log('Error al realizar la petición AJAX: ' + err.message);
  }
};

export default sendData;
