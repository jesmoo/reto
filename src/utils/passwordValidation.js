import passLength from './passLength';
import hasNumber from './hasNumber';
import sentence from './sentence';

const passwordValidation = (password = '', arrRef) => {
  let pass = password;

  let passwordLength = passLength(pass);
  removeAdd(passwordLength, arrRef, 0);

  let hasNumberPassword = hasNumber(pass);
  removeAdd(hasNumberPassword, arrRef, 1);

  let sentencePasword = sentence(pass);
  removeAdd(sentencePasword, arrRef, 3);
};

const removeAdd = (condition, arr, id) => {
  if (condition) {
    arr[id].current.classList.remove('red');
    arr[id].current.classList.add('green');
  } else {
    arr[id].current.classList.remove('green');
    arr[id].current.classList.add('red');
  }
};

export default passwordValidation;
