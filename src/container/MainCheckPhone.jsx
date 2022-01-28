import React from 'react';
import Btns from '../components/Btns';
import BtnNext from '../components/BtnNext';

const MainCheckPhone = () => {
  const phone = '9983542853';
  const phoneSplited = phone.split('');

  const handleReSend = (e) => {
    console.log('renviados');
  };

  return (
    <>
      <p className="main__checkPhone__title">Verifica tu telefono celular</p>
      <p className="main__checkPhone__send">
        Hemos enviado un código único de 6 digítos a tu teléfono celular
      </p>
      <p className="main__checkPhone__number">
        {`${phoneSplited[0]}${phoneSplited[1]} ${phoneSplited[2]}${phoneSplited[3]}${phoneSplited[4]}${phoneSplited[5]} ${phoneSplited[6]}${phoneSplited[7]}${phoneSplited[8]}${phoneSplited[9]}`}
      </p>
      <p className="main__checkPhone__expire">tu codigo expira en 2 minutos</p>
      <p className="main__checkPhone__question">
        ¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo
        nuevamente
      </p>
      <Btns
        classNames={'main__checkPhone__resend'}
        text={'Renvíar SMS'}
        onClicks={handleReSend}
      />
      <BtnNext
        classNamePincipal="main__phone"
        prev={'/'}
        classPrev={'phone__btns-prev'}
        textPrev={'Anterior'}
        next={'next'}
        classNext={'phone__btns-next'}
        textNext={'Validar Codigo'}
      />{' '}
    </>
  );
};

export default MainCheckPhone;
