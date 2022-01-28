import React from 'react';

const Input = ({
  classSection,
  text,
  type,
  place,
  handle,
  value,
  textError,
}) => {
  return (
    <section className={`${classSection} inputs-container`}>
      <label htmlFor={type} className={`${type}-label labels`}>
        {text}
      </label>
      <input
        required
        onChange={handle}
        value={value}
        type={type}
        id={type}
        className={`${type}-input inputs`}
        placeholder={place}
      />
      <p className={`${type}-error none`}>{textError}</p>
    </section>
  );
};

export default Input;
