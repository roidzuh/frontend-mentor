import { useState } from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Checked from './components/Checked';
import Strength from './components/Strength';
import BtnGenerate from './components/BtnGenerate';
import useRandomPassword from './hook/useRandomPassword';
import RangeSlider from './components/RangeSlider';

function App() {
  const [charLength, setCharLength] = useState(0);
  const [strength, setStrength] = useState('');
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [copy, setCopy] = useState(false);

  const check =
    (uppercase ? 1 : 0) +
    (lowercase ? 1 : 0) +
    (numbers ? 1 : 0) +
    (symbols ? 1 : 0);

  const { password, generatePassword } = useRandomPassword(
    charLength,
    uppercase,
    lowercase,
    numbers,
    symbols
  );

  const calculateStrength = () => {
    if (charLength <= 5) return 'TOO WEAK!';
    if (charLength > 5 && check === 2) return 'WEAK';
    if (charLength > 5 && check === 3) return 'MEDIUM';
    if (charLength > 5 && check === 4) return 'STRONG';
  };

  const handleClick = () => {
    if (charLength > 0 && check > 0) {
      generatePassword();
      setStrength(calculateStrength());
    }
  };

  const handleCopy = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopy(true);
          // Optionally, you can display a success message or toast here
        })
        .catch((error) => {
          console.error('Failed to copy password: ', error);
        });
    }
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <main className="px-4 flex flex-col justify-center items-center ">
      <Title />
      <Container className="my-4 w-full flex justify-between items-center min-w-[343px] relative md:mt-8 md:min-w-[540px]">
        <input
          type="text"
          className={`bg-custom-dark text-custom-light font-bold focus:outline-none text-heading-m max-w-[294px] transition-all  duration-500 md:text-heading-l md:max-w-fit ${
            copy ? 'pr-24 md:pr-0' : ''
          }`}
          placeholder="P4$5W0rD!"
          value={password} // Show the generated password
          disabled
        />
        <p
          className={`absolute text-[18px] text-custom-mint font-bold right-12 transition-opacity duration-500 md:right-16 ${
            copy ? 'opacity-100' : 'opacity-0'
          }`}
        >
          COPIED
        </p>

        <button
          onClick={handleCopy}
          className="group transition duration-300 ease-in-out"
        >
          <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
              className={`transition-colors duration-300 ease-in-out  ${
                copy ? 'group-hover:fill-[#A4FFAF]' : 'group-hover:fill-white'
              }`}
            />
          </svg>
        </button>
      </Container>
      <Container className="w-full md:pt-6 md:pb-8">
        <p className="text-custom-light font-bold text-base mb-2 flex justify-between items-center md:text-body md:mb-4 ">
          Character Length{' '}
          <span className=" text-custom-mint text-heading-m md:text-heading-l">
            {charLength}
          </span>
        </p>
        {/* <input
          type="range"
          min={0}
          max={20}
          value={charLength}
          onChange={(e) => setCharLength(Number(e.target.value))} // Ensure charLength is a number
          className="w-full mb-8 cursor-pointer"
        /> */}
        <RangeSlider value={charLength} setValue={setCharLength} />
        <div className="flex flex-col gap-4 mb-8 md:gap-5">
          <Checked
            title="Include Uppercase Letters"
            check={uppercase}
            setCheck={setUppercase}
          />
          <Checked
            title="Include Lowercase Letters"
            check={lowercase}
            setCheck={setLowercase}
          />
          <Checked
            title="Include Numbers"
            check={numbers}
            setCheck={setNumbers}
          />
          <Checked
            title="Include Symbols"
            check={symbols}
            setCheck={setSymbols}
          />
        </div>
        <Strength strength={strength} />
        <BtnGenerate onClick={handleClick} />
      </Container>
      <p className="text-gray-600 text-sm text-center mb-4 md:col-span-2 lg:col-span-4 mt-4">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io"
          className="text-blue-800"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/roidzuh"
          className="text-blue-800"
          target="_blank"
        >
          Roid Zuhdianto
        </a>
        .
      </p>
    </main>
  );
}

export default App;
