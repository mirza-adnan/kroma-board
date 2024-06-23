function FormInput({ label, type, placeholder, handleChange, value, name }) {
  return (
    <div>
      <label
        htmlFor=""
        className="font-medium text-lg block"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full py-2 px-2 rounded-md mt-1 text-bright bg-dark shadow-lg shadow-darkish-700"
        placeholder={placeholder || ""}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
export default FormInput;
