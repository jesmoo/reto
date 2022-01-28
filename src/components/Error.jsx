import React from 'react';
import '../Styles/components/Error.css';

const Error = ({ text }) => {
  return (
    <section className="main__error">
      <p className="main__error-text">{text}</p>
    </section>
  );
};

export default Error;
