const RangeSlider = ({ value, setValue }) => {
  // State untuk menyimpan nilai slider

  // Fungsi untuk menangani perubahan nilai slider
  const handleChange = (e) => {
    setValue(Number(e.target.value)); // Mengupdate nilai slider di state
  };

  return (
    <input
      type="range"
      min={0}
      max={20}
      value={value}
      onChange={handleChange}
      style={{
        // Gaya inline untuk slider dengan background dinamis
        //value ranges from 0 to 20, and 100% divided by 20 equals 5.
        background: `linear-gradient(to right, #a4ffaf ${value * 5}%, #18171F ${
          value * 5
        }%)`,
      }}
      className="w-full mb-8 cursor-pointer"
    />
  );
};

export default RangeSlider;
