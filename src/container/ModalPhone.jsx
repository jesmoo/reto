import React, { useEffect, useState } from 'react';
import Btns from '../components/Btns';
import BtnNext from '../components/BtnNext';

import generateValidationCode from '../utils/generateValidationCode';
import Swal from 'sweetalert2';

import '../Styles/containers/ModalPhone.css';

const ModalPhone = ({ number }) => {
  const phone = number;
  const phoneSplited = phone.split('');
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);

  const handleReSend = (e) => {
    Swal.fire('Tu codigo aun es valido');
  };

  const handleSetNumber1 = (e) => {
    const num1 = parseInt(e.target.value);
    setNumber1(num1);
  };
  const handleSetNumber2 = (e) => {
    const num2 = parseInt(e.target.value);
    setNumber2(num2);
  };
  const handleSetNumber3 = (e) => {
    const num3 = parseInt(e.target.value);
    setNumber3(num3);
  };
  const handleSetNumber4 = (e) => {
    const num4 = parseInt(e.target.value);
    setNumber4(num4);
  };

  // const startTimer = (duration = 60 * 2) => {
  //   let timer = duration,
  //     minutes,
  //     seconds;
  //   setInterval(() => {
  //     minutes = parseInt(timer / 60, 10);
  //     seconds = parseInt(timer % 60, 10);

  //     minutes = minutes < 10 ? '0' + minutes : minutes;
  //     seconds = seconds < 10 ? '0' + seconds : seconds;

  //     if (--timer < 0) {
  //       timer = duration;
  //     }
  //     console.log(minutes);
  //     console.log(seconds);
  //   }, 1000);
  // };

  const showAlertSweet = () => {
    Swal.fire({
      title: 'Tu codigo de validacion',
      text: 'Se eliminara en 2 minutos: ',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // startTimer();
      }
    });
  };

  const handleValite = (e) => {
    e.preventDefault();
    // por tiempo se simulara un codigo
    const codigoAuxiliar = '0011';
    const codigoAuxiliarSplited = codigoAuxiliar.split('');

    if (parseInt(codigoAuxiliarSplited[0]) === number1) {
      if (parseInt(codigoAuxiliarSplited[1]) === number2) {
        if (parseInt(codigoAuxiliarSplited[2]) === number3) {
          if (parseInt(codigoAuxiliarSplited[3]) === number4) {
            const routeValidation = `api/phoneNumber/verify`;
            const dataToken = { token: '9983' };

            const tokenHeader = sessionStorage.getItem('headerToken');
            const tokenMain = sessionStorage.getItem('mainToken');
            const tokens = { header: tokenHeader, main: tokenMain };

            // const responseValidation = await sendData(
            //   dataToken,
            //   routeValidation,
            //   tokens
            // );
            // console.log(responseValidation);
            // alert('tu codigo de verificacion es: 0011');
            // const response = await sendData(data, sendURL);
            // if (response.status === 200) {
            //   sessionStorage.number = phoneData;
            //   if (sessionStorage.getItem('number')) {
            //     // window.location.href = '/2/next';
            //   }
            // }
          }
        }
      }
    }
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
        <p className="expireContainer-text">{`Tu código expira en 2 minutos.`}</p>
        <div className="expireContainer-numbers">
          <input
            type="number"
            onChange={handleSetNumber1}
            maxLength="1"
            className="numbers-inputValidation"
          />
          <input
            type="number"
            maxLength="1"
            onChange={handleSetNumber2}
            className="numbers-inputValidation"
          />
          <input
            type="number"
            maxLength="1"
            onChange={handleSetNumber3}
            className="numbers-inputValidation"
          />
          <input
            type="number"
            maxLength="1"
            onChange={handleSetNumber4}
            className="numbers-inputValidation"
          />
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
        onClicksNext={handleValite}
      />
    </div>
  );
};

export default ModalPhone;
