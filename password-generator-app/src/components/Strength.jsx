function Strength({ strength }) {
  return (
    <section className="bg-custom-darker px-4 py-[14px] flex justify-between items-center mb-4 md:py-5 md:px-8">
      <p className="text-base text-custom-medium font-bold md:text-body">
        STRENGTH
      </p>

      <div className="flex gap-4 items-center">
        <p className="text-body text-custom-light md:text-heading-m">
          {strength}
        </p>

        <div className="flex items-center gap-2">
          <div
            className={`w-[10px] h-[28px] border-2 ${
              strength === 'TOO WEAK!'
                ? 'border-custom-red bg-custom-red'
                : strength === 'WEAK'
                ? 'border-custom-coral bg-custom-coral'
                : strength === 'MEDIUM'
                ? 'border-custom-yellow bg-custom-yellow'
                : strength === 'STRONG'
                ? 'border-custom-mint bg-custom-mint'
                : ''
            } `}
          ></div>
          <div
            className={`w-[10px] h-[28px] border-2 ${
              strength === 'WEAK'
                ? 'border-custom-coral bg-custom-coral'
                : strength === 'MEDIUM'
                ? 'border-custom-yellow bg-custom-yellow'
                : strength === 'STRONG'
                ? 'border-custom-mint bg-custom-mint'
                : ''
            } `}
          ></div>
          <div
            className={`w-[10px] h-[28px] border-2 ${
              strength === 'MEDIUM'
                ? 'border-custom-yellow bg-custom-yellow'
                : strength === 'STRONG'
                ? 'border-custom-mint bg-custom-mint'
                : ''
            } `}
          ></div>
          <div
            className={`w-[10px] h-[28px] border-2 ${
              strength === 'STRONG' ? 'border-custom-mint bg-custom-mint' : ''
            } `}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Strength;
