import { useState } from 'react';
import Button from './Button';
import Paragraf from './Paragraf';
import Label from './Label';

function Form({ onSuccess, setEmail, email }) {
  // const [email, setEmail] = useState('');
  const [eror, setEror] = useState(false);
  const validasi = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    return validasi.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setEror(true);
      return;
    }

    if (validateEmail(email)) {
      setEror(false);
      onSuccess(true);
      setEmail('');
    }
  };

  return (
    <form className="flex flex-col relative" onSubmit={handleSubmit}>
      <Label
        htmlFor="email"
        className="text-custom-size-12 font-bold mb-2 text-custom-dark-navy"
        text="Email address"
      />

      <Paragraf
        className={`${
          eror
            ? 'text-custom-size-12 font-bold mb-2 text-custom-vermellion absolute right-0'
            : 'hidden'
        }`}
      >
        Valid email required
      </Paragraf>
      <input
        type="text"
        name="email"
        id="email"
        className={`${
          eror
            ? 'px-6 py-4 border-2 rounded-lg border-custom-vermellion text-custom-vermellion placeholder-custom-vermellion mb-6 bg-custom-vermellion-15 cursor-pointer'
            : 'px-6 py-4 border-2 rounded-lg border-custom-gray mb-6 cursor-pointer hover:border-custom-dark-navy'
        }`}
        placeholder="email@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (eror) setEror(false);
        }}
      />
      <Button
        text="Subscribe to monthly newsletter"
        className="pt-5 pb-4 bg-custom-dark-navy text-white font-bold text-custom-size-16 rounded-lg hover:bg-gradient-to-b from-custom-gradien-1 to-custom-gradien-2 hover:drop-shadow-[0_16px_32px_#ff605580]"
      />
    </form>
  );
}

export default Form;
