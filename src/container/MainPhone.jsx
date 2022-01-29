import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Progress from '../components/Progress';
import Input from '../components/Input';
import BtnNext from '../components/BtnNext';
import Login from '../components/Login';
import Cookies from 'universal-cookie';

import '../Styles/containers/MainPhone.css';

const MainPhone = () => {
  const cookies = new Cookies();
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  let numberPage = id;
  let phoneLength = phone.typed === undefined ? 0 : phone.typed.length;

  const handleTyped = (e) => {
    const number = e.target.value;
    setPhone({ ...phone, typed: number });
  };

  useEffect(() => {
    console.log(cookies.get('email'));
    console.log(cookies.get('password'));
  });

  return (
    <>
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
          next={'next'}
          classNext={'phone__btns-next'}
          textNext={'Continuar'}
        />
      ) : null}
    </>
  );
};

export default MainPhone;
