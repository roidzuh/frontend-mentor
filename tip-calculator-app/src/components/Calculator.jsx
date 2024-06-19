import { useEffect, useState } from 'react';
import Container from './Container';
import Input from './Input';
import Tip from './Tip';

function Calculator() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const disable =
    tip === '' && bill === '' && customTip === '' && people === '';

  const handleReset = () => {
    setBill('');
    setTip('');
    setCustomTip('');
    setPeople('');
    setTipAmount(0);
    setTotal(0);
  };

  const handleTip = (e) => {
    setTip(e.target.innerText.split('%').join(''));
    setCustomTip('');
  };

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
    setTip('');
  };

  useEffect(() => {
    const handleTotal = () => {
      const tipAmountTotal =
        (Number(bill) * Number(tip ? tip : customTip)) / 100;
      const totalAmount = Number(bill) + tipAmountTotal;

      setTipAmount(tipAmountTotal / people);
      setTotal(totalAmount / people);
    };

    if (!!bill && !!people && (!!tip || !!customTip)) handleTotal();
  }, [bill, tip, customTip, people]);

  return (
    <section className="flex flex-col gap-8 py-8 bg-white rounded-t-3xl md:flex-row md:rounded-3xl md:pl-12 md:gap-12 justify-center items-center">
      <div className=" flex flex-col mx-8 gap-8 max-w-[400px] md:gap-10 md:mx-0">
        <Input
          textLabel="Bill"
          icon="/icon-dollar.svg"
          name="bill"
          alt="icon-dollar"
          placeholder="0"
          value={bill}
          onChange={setBill}
        />
        <Tip
          customTip={customTip}
          onTip={handleTip}
          onCustomTip={handleCustomTip}
          tip={tip}
        />
        <div className="relative">
          <Input
            textLabel="Number of People"
            icon="/icon-person.svg"
            alt="icon-person"
            name="total-person"
            placeholder="0"
            value={people}
            onChange={setPeople}
          />
          <p
            className={`absolute top-0 right-8 font-bold text-[#E17457] ${
              Number(people) === 0 && people !== '' ? 'block' : 'hidden'
            }`}
          >
            Can't be zero
          </p>
        </div>
      </div>

      <Container
        tipAmount={tipAmount}
        total={total}
        onReset={handleReset}
        disable={disable}
      />
    </section>
  );
}

export default Calculator;
