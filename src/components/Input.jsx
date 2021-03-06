import React from 'react';

const Input = ({ classSection, text, type, place, handle, value, name }) => {
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
        name={name}
        className={`${type}-input inputs`}
        placeholder={place}
      />
    </section>
  );
};

export default Input;
