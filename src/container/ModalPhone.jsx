import React, { useEffect } from 'react';
import Btns from '../components/Btns';
import BtnNext from '../components/BtnNext';

import '../Styles/containers/ModalPhone.css';

const ModalPhone = ({ number }) => {
  const phone = number;
  const phoneSplited = phone.split('');

  const handleReSend = (e) => {
    console.log('renviados');
  };

  useEffect(() => {});
  // let email = localStorage.getItem('email');
  // console.log(email);

  return (
    <div className="modal__checkPhone">
      <p className="checkPhone__title">Verifica tu telefono celular</p>
      <p className="checkPhone__send">
        Hemos enviado un código único de 4 digítos a tu teléfono celular{' '}
      </p>
      <p className="checkPhone__number">
        {`${phoneSplited[0]}${phoneSplited[1]} ${phoneSplited[2]}${phoneSplited[3]}${phoneSplited[4]}${phoneSplited[5]} ${phoneSplited[6]}${phoneSplited[7]}${phoneSplited[8]}${phoneSplited[9]}`}
      </p>
      <div className="checkPhone__expireContainer">
        <p className="expireContainer-text">Tu código expira en 2 minutos.</p>
        <div className="expireContainer-numbers">
          <input type="number" className="numbers-inputValidation" />
          <input type="number" className="numbers-inputValidation" />
          <input type="number" className="numbers-inputValidation" />
          <input type="number" className="numbers-inputValidation" />
        </div>
      </div>
      <p className="checkPhone__question">
        ¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo
        nuevamente
      </p>
      <Btns
        classNames={'checkPhone__resend'}
        text={'Renvíar SMS'}
        onClicks={handleReSend}
      />
      <BtnNext
        classNamePincipal="phone"
        prev={'/'}
        classPrev={'phone__btns-prev'}
        textPrev={'Anterior'}
        next={'next'}
        classNext={'phone__btns-next'}
        textNext={'Validar Codigo'}
      />
    </div>
  );
};

export default ModalPhone;
