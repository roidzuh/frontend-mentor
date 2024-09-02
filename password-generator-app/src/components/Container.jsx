function Container({ children, className }) {
  return (
    <section
      className={`bg-custom-dark px-4 py-4 md:px-8 md:py-5 ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;
