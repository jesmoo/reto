import React, { useState } from 'react';
import Input from './Input';
import Error from './Error';
import Signup from './Signup';
import Btns from './Btns';
import PasswordText from './PasswordText';

import Cookies from 'universal-cookie';

import sendData from '../utils/sendData';

import '../Styles/components/InputHome.css';

const InputHome = () => {
  const [password, setPassword] = useState({});
  const [passwordCheck, setPasswordCheck] = useState({});

  const [status, setStatus] = useState({});
  const [email, setEmail] = useState({});

  const [samePassword, setSamePassword] = useState(0);

  const handlePassword = (e) => {
    const PasswordValue = e.target.value;
    setPassword({ ...password, typed: PasswordValue });
  };
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail({ ...email, typed: emailValue });
  };

  const handlePasswordCheck = (e) => {
    const PasswordValue = e.target.value;
    setPasswordCheck({ ...passwordCheck, typed: PasswordValue });
    if (password.typed === PasswordValue) {
      setSamePassword(samePassword + 1);
    } else {
      setSamePassword(0);
    }
  };

  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = email.typed;
    const passwordData = password.typed;
    const data = { email: emailData, password: passwordData };
    if (passwordData.length > 0 && emailData.length > 0) {
      const sendURL = `api/singUp`;

      const response = await sendData(data, sendURL);

      if (response.status === 200) {
        cookies.set('email: ', emailData, { path: '/' });
        cookies.set('password: ', passwordData, { path: '/' });
        window.location.href = '/2/phone';
      }
    }
  };

  let passwordLength = password.typed === undefined ? 0 : password.typed.length;
  let emailLength = email.typed === undefined ? 0 : email.typed.length;

  return (
    <>
      <section className="main__inputs">
        {status === 409 ? <Error text={'Correo ya registrado'} /> : null}

        <Input
          handle={handleEmail}
          value={email.typed || ''}
          name={'email'}
          classSection={'inputs__email'}
          text={'¿Cuál es tu correo electrónico?'}
          type={'email'}
          place={'tu@correo.com'}
        />
        {status === 400 ? <Error text={'Contraseña invalida'} /> : null}
        <Input
          handle={handlePassword}
          value={password.typed || ''}
          name={'password'}
          classSection={'inputs__password'}
          text={'Crea tu contraseña'}
          type={'password'}
          place={'Contraseña'}
        />
      </section>
      {passwordLength > 0 ? (
        <>
          <PasswordText passConditional={password.typed} />
          <Input
            classSection={'passwordCheck__again'}
            text={'Confirma tu contraseña'}
            type={'password'}
            place={'Contraseña'}
            handle={handlePasswordCheck}
            value={passwordCheck.typed || ''}
          />
          {emailLength > 0 && samePassword ? (
            <Btns
              classNames={'passwordCheck-btn'}
              text={'Continuar'}
              onClicks={handleSubmit}
            />
          ) : null}
        </>
      ) : (
        <Signup />
      )}
    </>
  );
};

export default InputHome;
