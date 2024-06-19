import Button from './Button';

function Container({ tipAmount, total, onReset, disable }) {
  return (
    <article className="bg-deepTeal rounded-2xl shadow-[0_32__43_0_#4FA6AF] text-white min-w-[420px] max-w-[500px] md:mr-8 h-full">
      <div className=" mx-6 mt-9 mb-8">
        <div className="flex justify-between mb-5">
          <p className="font-bold text-base ">
            Tip Amount{' '}
            <span className="text-coolGray block text-xs">/ Person</span>
          </p>
          <p className="font-bold text-[32px] tracking-[-0.67px] text-lightTeal">
            ${tipAmount === Infinity ? '0.00' : tipAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-base ">
            Total <span className="text-coolGray block text-xs">/ Person</span>
          </p>
          <p className="font-bold text-[32px] tracking-[-0.67px] text-lightTeal mb-8">
            ${total === Infinity ? '0.00' : total.toFixed(2)}
          </p>
        </div>
        <Button
          onClick={onReset}
          text="RESET"
          className={`w-full text-xl  text-deepTeal md:mt-44 ${
            disable ? 'bg-[#0D686D]' : 'bg-lightTeal hover:bg-[#9FE8DF] '
          }`}
          disabled={disable}
        />
      </div>
    </article>
  );
}

export default Container;
