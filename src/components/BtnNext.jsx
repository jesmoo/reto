import React from 'react';
import Btns from './Btns';
import '../Styles/components/BtnNext.css';

const BtnNext = ({
  classNamePincipal,
  prev,
  classPrev,
  textPrev,
  onClicksPrev,
  next,
  classNext,
  textNext,
  onClicksNext,
}) => {
  return (
    <section className={`${classNamePincipal} btnsPrevNext`}>
      <Btns
        ubication={prev}
        classNames={classPrev}
        text={textPrev}
        onClicks={onClicksPrev}
      />
      <Btns
        ubication={next}
        classNames={classNext}
        text={textNext}
        onClicks={onClicksNext}
      />
    </section>
  );
};

export default BtnNext;
