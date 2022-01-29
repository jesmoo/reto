import React, { useState } from 'react';
import Input from './Input';
import Error from './Error';
import Signup from './Signup';
import Btns from './Btns';
import PasswordText from './PasswordText';

import sendData from '../utils/sendData';

import '../Styles/components/InputHome.css';

const InputHome = () => {
  const [passwordTyped, setPasswordTyped] = useState({});
  const [passwordCheck, setPasswordCheck] = useState({});

  const [status, setStatus] = useState({});
  const [emailTyped, setEmailTyped] = useState({});

  const [samePassword, setSamePassword] = useState(0);

  const handlePassword = (e) => {
    const PasswordValue = e.target.value;
    setPasswordTyped({ ...passwordTyped, typed: PasswordValue });
  };
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmailTyped({ ...emailTyped, typed: emailValue });
  };

  const handlePasswordCheck = (e) => {
    const PasswordValue = e.target.value;
    setPasswordCheck({ ...passwordCheck, typed: PasswordValue });
    if (passwordTyped.typed === PasswordValue) {
      setSamePassword(samePassword + 1);
    } else {
      setSamePassword(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = emailTyped.typed;
    const passwordData = passwordTyped.typed;
    const data = { email: emailData, password: passwordData };

    if (passwordData.length > 0 && emailData.length > 0) {
      const sendURL = `api/singUp`;

      const response = await sendData(data, sendURL);
      // console.log(response);
      // setStatus(response.status);
      if (response.status === 200) {
        sessionStorage.headerToken = response.config.xsrfHeaderName;
        sessionStorage.mainToken = response.config.xsrfCookieName;
        sessionStorage.email = emailData;
        if (sessionStorage.getItem('mainToken')) {
          // window.location.href = '/2/phone';
        }
      }
    }
  };

  let passwordLength =
    passwordTyped.typed === undefined ? 0 : passwordTyped.typed.length;
  let emailLength =
    emailTyped.typed === undefined ? 0 : emailTyped.typed.length;

  return (
    <>
      <section className="main__inputs">
        {status === 409 ? <Error text={'Correo ya registrado'} /> : null}

        <Input
          handle={handleEmail}
          value={emailTyped.typed || ''}
          name={'email'}
          classSection={'inputs__email'}
          text={'¿Cuál es tu correo electrónico?'}
          type={'email'}
          place={'tu@correo.com'}
        />
        {status === 400 ? <Error text={'Contraseña invalida'} /> : null}
        <Input
          handle={handlePassword}
          value={passwordTyped.typed || ''}
          name={'password'}
          classSection={'inputs__password'}
          text={'Crea tu contraseña'}
          type={'password'}
          place={'Contraseña'}
        />
      </section>
      {passwordLength > 0 ? (
        <>
          <PasswordText passConditional={passwordTyped.typed} />
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
