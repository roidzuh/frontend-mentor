const Paragraph = ({ text, className }) => {
  return (
    <p
      className={`font-normal text-sm leading-[22px] lg:text-[15px] lg:leading-[24px] ${className}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
