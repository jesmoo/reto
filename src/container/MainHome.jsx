import React from 'react';
import Progress from '../components/Progress';
import Conditions from '../components/Conditions';
import InputHome from '../components/InputHome';
import Login from '../components/Login';
import '../Styles/containers/MainHome.css';

const MainHome = () => {
  return (
    <>
      <Progress id={1} />
      <Conditions />
      <InputHome />
      <Login />
    </>
  );
};

export default MainHome;
