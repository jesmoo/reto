import React from 'react';
import Btns from './Btns';
import '../Styles/components/BtnNext.css';

const BtnNext = ({
  classNamePincipal,
  prev,
  classPrev,
  textPrev,
  next,
  classNext,
  textNext,
}) => {
  return (
    <section className={`${classNamePincipal} btnsPrevNext`}>
      <Btns ubication={prev} classNames={classPrev} text={textPrev} />
      <Btns ubication={next} classNames={classNext} text={textNext} />
    </section>
  );
};

export default BtnNext;
