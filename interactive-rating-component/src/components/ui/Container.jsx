const Container = ({ children, className }) => {
  return (
    <section
      className={`w-[327px] bg-custom-radial h-[360px] px-6 py-6 flex flex-col justify-center gap-6 rounded-[15px] lg:px-8 lg:py-8 lg:min-h-[416px] lg:gap-8 lg:w-[412px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
