import React, { useRef, useEffect } from 'react';
import passwordValidation from '../utils/passwordValidation';
import '../Styles/components/PasswordText.css';

const PasswordText = ({ passConditional }) => {
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
    </section>
  );
};

export default PasswordText;
