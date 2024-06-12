function Card({ children, className }) {
  return <section className={`bg-white  ${className}`}>{children}</section>;
}

export default Card;
