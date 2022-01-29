const randomNumber = (min = 1, max = 9) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default randomNumber;
