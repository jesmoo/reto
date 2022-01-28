import React from 'react';
import Icons from './Icons';
import '../Styles/components/Singup.css';

const Signup = () => {
  return (
    <>
      <div className="main__signupWith">
        <span className="decoration-text postionLeft" />
        <p className="signupWith-text">o regístrate con:</p>
        <span className="decoration-text postionRight" />
      </div>
      <section className="main__signupWith-icon">
        <Icons classSignup={'signupWith'} icon={'google'} />
        <Icons classSignup={'signupWith'} icon={'microsoft'} />
        <Icons classSignup={'signupWith'} icon={'facebook'} />
      </section>
    </>
  );
};

export default Signup;
