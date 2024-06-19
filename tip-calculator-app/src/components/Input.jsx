function Input({ textLabel, name, icon, alt, onChange, value }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-bold text-slateGray">
        {textLabel}
      </label>
      <div className="relative">
        <input
          name={name}
          id={name}
          type="number"
          className="bg-iceBlue text-2xl font-bold text-deepTeal py-4 text-right pr-4 pl-10 rounded hide-number-input-arrows focus:outline-lightTeal caret-lightTeal w-full"
          placeholder="0"
          value={value}
          onChange={handleChange}
          min="0"
        />
        <img src={icon} alt={alt} className="absolute top-6 left-5" />
      </div>
    </div>
  );
}

export default Input;
