import { useState } from 'react';

const useRandomPassword = (
  charLength = 0,
  isUppercase = false,
  isLowercase = false,
  isNumber = false,
  isSpecial = false
) => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charLowercase = 'abcdefghijklmnopqrstuvwxyz';
    const charNumber = '0123456789';
    const charSpecial = '!@#$%^&*()_+-=';

    let charAll = '';
    if (isUppercase) charAll += charUppercase;
    if (isLowercase) charAll += charLowercase;
    if (isNumber) charAll += charNumber;
    if (isSpecial) charAll += charSpecial;

    const passwordArray = Array.from({ length: charLength }, () => {
      const randomIndex = Math.floor(Math.random() * charAll.length);
      return charAll[randomIndex];
    });

    setPassword(passwordArray.join(''));
  };

  return {
    password,
    generatePassword,
  };
};

export default useRandomPassword;
