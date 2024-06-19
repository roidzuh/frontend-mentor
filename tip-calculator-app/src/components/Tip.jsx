import Button from './Button';

function Tip({ className, customTip, onTip, onCustomTip, tip }) {
  return (
    <div>
      <p className={`font-bold text-slateGray mb-4 px-0 ${className} `}>
        Select Tip %
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Button
          onClick={onTip}
          text="5%"
          className={`  text-2xl hover:bg-[#9FE8DF] hover:text-deepTeal ${
            tip === '5'
              ? 'bg-[#9FE8DF] text-deepTeal'
              : 'bg-deepTeal text-white'
          }`}
        />
        <Button
          onClick={onTip}
          text="10%"
          className={`  text-2xl hover:bg-[#9FE8DF] hover:text-deepTeal ${
            tip === '10'
              ? 'bg-[#9FE8DF] text-deepTeal'
              : 'bg-deepTeal text-white'
          }`}
        />
        <Button
          onClick={onTip}
          text="15%"
          className={`  text-2xl hover:bg-[#9FE8DF] hover:text-deepTeal ${
            tip === '15'
              ? 'bg-[#9FE8DF] text-deepTeal'
              : 'bg-deepTeal text-white'
          }`}
        />
        <Button
          onClick={onTip}
          text="25%"
          className={`  text-2xl hover:bg-[#9FE8DF] hover:text-deepTeal ${
            tip === '25'
              ? 'bg-[#9FE8DF] text-deepTeal'
              : 'bg-deepTeal text-white'
          }`}
        />
        <Button
          onClick={onTip}
          text="50%"
          className={`  text-2xl hover:bg-[#9FE8DF] hover:text-deepTeal ${
            tip === '50'
              ? 'bg-[#9FE8DF] text-deepTeal'
              : 'bg-deepTeal text-white'
          }`}
        />
        <input
          placeholder="Custom"
          type="number"
          className="bg-iceBlue text-deepTeal text-2xl font-bold placeholder:text-mediumSlate py-4 text-right pr-4 pl-10 rounded hide-number-input-arrows focus:outline-lightTeal caret-lightTeal md:pl-4"
          value={customTip}
          onChange={onCustomTip}
          onClick={onCustomTip}
        />
      </div>
    </div>
  );
}

export default Tip;
