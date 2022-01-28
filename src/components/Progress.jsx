import React, { useRef, useEffect } from 'react';
import '../Styles/components/Progress.css';

const Progress = ({ id }) => {
  const progress1 = useRef();
  const progress2 = useRef();
  const progress3 = useRef();
  const progress4 = useRef();
  const progressPage = parseInt(id);
  const progressArray = [progress1, progress2, progress3, progress4];

  useEffect(() => {
    normalColor(progressArray);
    if (progressPage === 1) {
      progressColor(progressArray[0]);
    }
    if (progressPage === 2) {
      progressColor(progressArray[1]);
    }
    if (progressPage === 3) {
      progressColor(progressArray[3]);
    }
    if (progressPage === 4) {
      progressColor(progressArray[4]);
    }
  });

  const normalColor = (arr) => {
    arr.forEach((elemnt) => {
      elemnt.current.classList.add('gray');
      elemnt.current.classList.remove('black');
    });
  };

  const progressColor = (element) => {
    element.current.classList.remove('gray');
    element.current.classList.add('black');
  };

  return (
    <div className="main__progress">
      <span ref={progress1} className="progress__icon gray" />
      <span ref={progress2} className="progress__icon gray" />
      <span ref={progress3} className="progress__icon gray" />
      <span ref={progress4} className="progress__icon gray" />
    </div>
  );
};

export default Progress;
