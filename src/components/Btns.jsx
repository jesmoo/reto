import React from 'react';
import '../Styles/components/Btns.css';

const Btns = ({ classNames = '', text = 'error', onClicks }) => {
  return (
    <button
      type="button"
      className={`${classNames} bnsGeneral`}
      onClick={onClicks}
    >
      {text}
    </button>
  );
};

export default Btns;
