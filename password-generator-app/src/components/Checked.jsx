function Checked({ title, check, setCheck }) {
  return (
    <div className="flex items-center gap-5 md:gap-6">
      {/* Checkbox container */}
      <label className="relative flex items-center cursor-pointer">
        {/* Hidden default checkbox */}
        <input
          type="checkbox"
          id={`checkbox-${title}`}
          checked={check}
          onChange={() => setCheck(!check)}
          className="hidden"
        />
        {/* Custom checkbox */}
        <span
          className={`w-5 h-5 border-2  flex items-center justify-center transition-colors duration-300 ease-in-out hover:border-custom-mint ${
            check ? 'bg-custom-mint border-custom-mint' : ''
          }`}
        >
          {check && (
            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#18171F"
                strokeWidth="3"
                fill="none"
                d="M1 5.607 4.393 9l8-8"
              />
            </svg>
          )}
        </span>
      </label>
      {/* Label text */}
      <label
        htmlFor={`checkbox-${title}`}
        className="text-custom-light font-bold text-base cursor-pointer md:text-body"
      >
        {title}
      </label>
    </div>
  );
}

export default Checked;
