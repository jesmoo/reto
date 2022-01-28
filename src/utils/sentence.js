const sentence = (pass) => {
  let passwordLowerd = pass.toLowerCase();
  return passwordLowerd !== '100ladrillos';
};
export default sentence;
