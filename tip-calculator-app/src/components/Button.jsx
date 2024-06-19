function Button({ text, className, onClick, disabled }) {
  const handleChange = (e) => {
    onClick(e);
  };

  return (
    <button
      className={`font-bold rounded py-4 ${className}`}
      onClick={handleChange}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
