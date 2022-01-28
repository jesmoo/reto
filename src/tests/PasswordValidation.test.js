import passLength from '../utils/passLength';
import hasNumber from '../utils/hasNumber';
import sentence from '../utils/sentence';

describe('Validando la contraseña', () => {
  test('recive la contraseña de 6 de tamaaño deberia de pasar', () => {
    const expected = true;
    const result = passLength('123456');
    expect(expected).toBe(result);
  });
  test('recive la contraseña sin numero deberia dar falso', () => {
    const expected = false;
    const result = hasNumber('abc');
    expect(expected).toBe(result);
  });
  test('recive la frase 100Ladrillos deberia ser false', () => {
    const expected = false;
    const result = sentence('100Ladrillos');
    expect(expected).toBe(result);
  });
});
