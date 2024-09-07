export const Icon = ({ quiz }) => {
  return (
    <div
      className={`${quiz?.title === 'HTML' ? 'bg-[#FFF1E9]' : ''} ${
        quiz?.title === 'CSS' ? 'bg-[#E0FDEF]' : ''
      } ${quiz?.title === 'JavaScript' ? 'bg-[#EBF0FF]' : ''} ${
        quiz?.title === 'Accessibility' ? 'bg-[#F6E7FF]' : ''
      } p-1 rounded-md md:rounded-xl md:w-14 md:h-14 md:p-2 xl:rounded-lg`}
    >
      <img src={quiz?.icon} alt={quiz?.title} />
    </div>
  );
};
