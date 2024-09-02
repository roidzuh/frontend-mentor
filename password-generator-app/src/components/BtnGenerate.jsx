function BtnGenerate({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="flex justify-center items-center gap-4 py-[18px] bg-custom-mint w-full text-base font-bold border-2 border-custom-mint  hover:bg-custom-dark hover:text-custom-mint transition-colors duration-300 ease-in-out group md:text-body"
      onClick={handleClick}
    >
      GENERATE
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          className="transition-colors duration-300 ease-in-out group-hover:fill-custom-mint"
        />
      </svg>
    </button>
  );
}

export default BtnGenerate;
