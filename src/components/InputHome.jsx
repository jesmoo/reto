import React, { useState } from 'react';
import Input from './Input';
import Signup from '../components/Signup';
import PasswordText from '../components/PasswordText';

import '../Styles/components/InputHome.css';

const InputHome = () => {
  const [password, setPassword] = useState({});
  const [email, setEmail] = useState({});

  const handlePassword = (e) => {
    const PasswordValue = e.target.value;
    setPassword({ ...password, typed: PasswordValue });
  };
  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail({ ...email, typed: emailValue });
  };

  let passwordLength = password.typed === undefined ? 0 : password.typed.length;
  return (
    <>
      <section className="main__inputs">
        <Input
          handle={handleEmail}
          value={email.typed || ''}
          classSection={'inputs__email'}
          text={'¿Cuál es tu correo electrónico?'}
          type={'email'}
          place={'tu@correo.com'}
        />
        <Input
          handle={handlePassword}
          value={password.typed || ''}
          classSection={'inputs__password'}
          text={'Crea tu contraseña'}
          type={'password'}
          place={'Contraseña'}
        />
      </section>
      {passwordLength > 0 ? (
        <PasswordText passConditional={password.typed} email={email.typed} />
      ) : (
        <Signup />
      )}
    </>
  );
};

export default InputHome;
