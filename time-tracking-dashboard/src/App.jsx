import { useState } from 'react';
import Card from './components/Card';
import { useEffect } from 'react';

export default function App() {
  const [datas, setDatas] = useState([]);
  const [select, setSelect] = useState('weekly');

  const handleSelect = (select) => {
    setSelect(select);
  };

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setDatas(data))

      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(datas);
  return (
    <main className="grid grid-cols-[327px] gap-6 h-fit pt-20 px-6 bg-[#0E1323] place-content-center md:grid-cols-[327px,327px] lg:grid-cols-4 lg:h-svh lg:grid-rows-[244px_244px]">
      <Card className="rounded-[15px] overflow-hidden bg-[#1C204B] md:col-span-2 lg:row-span-2 lg:col-span-1">
        <div className="flex gap-5 items-center bg-[#5747EA] rounded-[15px] py-9 pl-8  lg:flex-col lg:items-start lg:gap-11 lg:pb-20">
          <img
            src="/image-jeremy.png"
            alt="profile"
            className=" w-16 rounded-full border-[3px] md:w-[78px]"
          />
          <div>
            <p className="text-[#BBC0FF] text-[15px]">Report for</p>
            <h1 className="text-[#fff] font-light text-2xl md:text-[40px]">
              Jeremy Robson
            </h1>
          </div>
        </div>
        <div className=" flex justify-around text-[#7078C9] text-lg py-6 lg:flex-col lg:items-start lg:gap-[21px] lg:px-8">
          <button
            onClick={() => handleSelect('daily')}
            className={`hover:text-white ${
              select === 'daily' ? 'text-white' : ''
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => handleSelect('weekly')}
            className={`hover:text-white ${
              select === 'weekly' ? 'text-white' : ''
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => handleSelect('monthly')}
            className={`hover:text-white ${
              select === 'monthly' ? 'text-white' : ''
            }`}
          >
            Monthly
          </button>
        </div>
      </Card>
      {datas?.map((data) => (
        <Card
          key={data.title}
          className={`rounded-[15px] overflow-hidden relative ${
            data.title === 'Work'
              ? 'bg-[#FF8B64]'
              : '' || data.title === 'Play'
              ? 'bg-[#55C2E6]'
              : '' || data.title === 'Study'
              ? 'bg-[#FF5E7D]'
              : '' || data.title === 'Exercise'
              ? 'bg-[#4BCF82]'
              : '' || data.title === 'Social'
              ? 'bg-[#7335D2]'
              : '' || data.title === 'Self Care'
              ? 'bg-[#F1C75B]'
              : ''
          }`}
        >
          <img
            src={`/icon-${data.title}.svg`.toLowerCase()}
            alt="work"
            className="absolute right-[17px] top-[-10px]"
          />
          <div className="mt-10 bg-[#1C204B] relative bottom-0 w-auto z-10 px-6 py-7 rounded-[15px] hover:bg-[#33397A] cursor-pointer lg:bottom-[-7px]">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-[#fff] text-lg mb-[6px] lg:mb-0">
                {data.title}
              </h2>
              <svg
                width="21"
                height="5"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:h-[18px] "
              >
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fillRule="evenodd"
                  className="hover:fill-white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between lg:flex-col lg:items-start lg:mt-2">
              <h3 className="font-light text-[#fff] text-[32px] mb-[6px] lg:text-[56px] lg:mb-0">
                {data.timeframes[select].current}hrs
              </h3>
              <p className="text-[#BBC0FF] ">
                Last
                {select === 'weekly' && ' Week'}
                {select === 'daily' && ' Day'}
                {select === 'monthly' && ' Month'} -{' '}
                {data.timeframes[select].previous}hrs
              </p>
            </div>
          </div>
        </Card>
      ))}
      <p className="text-gray-600 text-sm text-center mb-4 md:col-span-2 lg:col-span-4">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io" className="text-blue-800">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/roidzuh"
          className="text-blue-800"
        >
          Roid Zuhdianto
        </a>
        .
      </p>
    </main>
  );
}
