import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function FormInputWithValidation({
  label,
  type,
  placeholder,
  handleChange,
  value,
  name,
  validate,
  error,
}) {
  return (
    <div>
      <label
        htmlFor=""
        className="font-medium text-md block"
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
        onBlur={validate}
      />
      {error && (
        <span className="text-sm text-red-500 m-2 flex items-center gap-2">
          <span className="text-sm">
            <FaExclamationCircle />
          </span>
          {error}
        </span>
      )}
    </div>
  );
}
