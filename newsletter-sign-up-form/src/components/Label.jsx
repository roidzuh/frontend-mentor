function Label({ className, text, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
}

export default Label;
