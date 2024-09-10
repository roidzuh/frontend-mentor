const Button = ({ onClick }) => {
  return (
    <button
      className="bg-orange py-[14px] rounded-[22.5px] font-bold text-sm tracking-[1.87px] text-veryDarkBlue hover:bg-white transition-all duration-300 ease-in-out lg:text-[15px] lg:tracking-[2px]"
      onClick={onClick}
    >
      SUBMIT
    </button>
  );
};

export default Button;
