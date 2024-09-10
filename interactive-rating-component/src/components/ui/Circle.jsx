const Circle = ({ children, className, onClick }) => {
  return (
    <div
      className={` bg-darkBlue flex items-center justify-center rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Circle;
