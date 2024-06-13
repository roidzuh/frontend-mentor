function Card({ className, children }) {
  return <section className={`rounded-2xl ${className}`}>{children}</section>;
}

export default Card;
