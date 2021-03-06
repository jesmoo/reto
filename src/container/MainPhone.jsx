import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Progress from '../components/Progress';
import Input from '../components/Input';
import BtnNext from '../components/BtnNext';
import Login from '../components/Login';

import ModalPhone from './ModalPhone';
import generateValidationCode from '../utils/generateValidationCode';
import sendData from '../utils/sendData';

import '../Styles/containers/MainPhone.css';

const MainPhone = () => {
  const [phone, setPhone] = useState({});
  const [modal, setModal] = useState(0);

  const { id } = useParams();
  let numberPage = id;
  let phoneLength = phone.typed === undefined ? 0 : phone.typed.length;

  const handleTyped = (e) => {
    const number = e.target.value;
    setPhone({ ...phone, typed: number });
  };

  const handleNext = async (e) => {
    const phoneData = phone.typed;
    const routeSend = `api/phoneNumber`;
    const data = { number: phoneData };
    const tokenHeader = sessionStorage.getItem('headerToken');
    const tokenMain = sessionStorage.getItem('mainToken');

    const tokens = { header: tokenHeader, main: tokenMain };
    const responseSendPhone = await sendData(data, routeSend, tokens);
    console.log(responseSendPhone);
    // setModal(modal + 1);
  };
  const validationCode = generateValidationCode();

  const handlePrevious = (e) => {
    window.location.href = '/';
  };

  useEffect(() => {
    if (!sessionStorage.getItem('email')) {
      window.location.href = '/';
    }
  });

  return (
    <>
      {modal === 1 ? (
        <ModalPhone number={phone.typed} code={validationCode} />
      ) : null}
      <Progress id={numberPage} />
      <h2 className="main__phone-title">¿Cuál es tu teléfono celular?</h2>
      <Input
        classSection={'main__phone-input'}
        text={'Ingrese su numero'}
        type={'number'}
        place={'01-23-45-67-89'}
        handle={handleTyped}
        value={phone.typed || ''}
      />
      <Login />

      {phoneLength === 10 ? (
        <BtnNext
          classNamePincipal="main__phone"
          prev={'/'}
          classPrev={'phone__btns-prev'}
          textPrev={'Anterior'}
          onClicksPrev={handlePrevious}
          next={'next'}
          classNext={'phone__btns-next'}
          textNext={'Continuar'}
          onClicksNext={handleNext}
        />
      ) : null}
    </>
  );
};

export default MainPhone;
