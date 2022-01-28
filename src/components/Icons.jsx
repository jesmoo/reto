import React from 'react';

const Icons = ({ classSignup, icon }) => {
  return (
    <div className={`${classSignup}-icon`}>
      <span className={`icon ${icon}`} />
    </div>
  );
};

export default Icons;
