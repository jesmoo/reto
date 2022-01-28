import React, { useRef, useEffect, useState } from 'react';
import Input from './Input';
import Btns from './Btns';
import Error from './Error';
import passwordValidation from '../utils/passwordValidation';
import sendData from '../utils/sendData';
import '../Styles/components/PasswordText.css';

const PasswordText = ({ passConditional, email }) => {
  const [passwordCheck, setPasswordCheck] = useState({});
  const [samePassword, setSamePassword] = useState(0);

  const charactesPassword = '!”#$%&/()=?¿^*@‚[]{};:_><,.-|`+.';

  const characters = useRef();
  const number = useRef();
  const characterSpecial = useRef();
  const sentence = useRef();
  const repetiveString = useRef();
  const repetiveNumber = useRef();

  const validationArray = [
    characters,
    number,
    characterSpecial,
    sentence,
    repetiveString,
    repetiveNumber,
  ];
  let pasword = passConditional;

  const handlePasswordCheck = (e) => {
    e.preventDefault();

    const PasswordValue = e.target.value;
    setPasswordCheck({ ...passwordCheck, typed: PasswordValue });
    if (pasword === PasswordValue) {
      setSamePassword(samePassword + 1);
    } else {
      setSamePassword(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = email;
    const passwordData = passConditional;
    const datas = { email: emailData, password: passwordData };

    if (passwordData.length > 0 && emailData.length > 0) {
      const result = sendData(datas);
    }
  };

  useEffect(() => {
    let validation = passwordValidation(pasword, validationArray);
  });

  return (
    <section className="main__passwordCheck">
      <p className="password-Alert">
        Por razones de seguridad tu contraseña debe tener las siguientes
        carateristicas:
      </p>
      <div className="password-rule">
        <span ref={characters} className="rule-icon red" />
        <p className="rule-text">
          Mínimo 6 caracteres (letras, números y caracteres especiales).
        </p>
      </div>
      <div className="password-rule">
        <span ref={number} className="rule-icon red" />
        <p className="rule-text">Mínimo 1 número.</p>
      </div>
      <div className="password-rule">
        <span ref={characterSpecial} className="rule-icon red" />
        <p className="rule-text">{`Mínimo 1 de estos caracteres especiales ${charactesPassword}`}</p>
      </div>
      <div className="password-rule">
        <span ref={sentence} className="rule-icon red" />
        <p className="rule-text">No tener la frase “100Ladrillos”.</p>
      </div>
      <div className="password-rule">
        <span ref={repetiveString} className="rule-icon red" />
        <p className="rule-text">
          No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).
        </p>
      </div>
      <div className="password-rule">
        <span ref={repetiveNumber} className="rule-icon red" />
        <p className="rule-text">
          No tener mas de 3 caracteres numéricos y/o letras en forma secuencial
          (ej: 123).
        </p>
      </div>
      <Input
        classSection={'passwordCheck__again'}
        text={'Confirma tu contraseña'}
        type={'password'}
        place={'Contraseña'}
        handle={handlePasswordCheck}
        value={passwordCheck.typed || ''}
      />
      {samePassword ? (
        <Btns
          classNames={'passwordCheck-btn'}
          text={'Continuar'}
          onClicks={handleSubmit}
        />
      ) : null}
      <Error text={'Correo ya registrado'} />
    </section>
  );
};

export default PasswordText;
