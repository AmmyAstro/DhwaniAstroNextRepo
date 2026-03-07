import React from 'react';
const variantClasses = {
  half: 'w-[80%]  text-sm sm:text-sm px-4 py-2  border placeholder:text-gray-300 bg-white rounded-full focus:outline-none focus:ring-0 ',
  full: 'w-full text-sm sm:text-sm px-4 py-2  border placeholder:text-gray-300 bg-white rounded-full focus:outline-none focus:ring-0 ',
};

export default function CustomSelect({ ...props }) {
  const { name, value, onChange, options = [], required, error, className = "", variant } = props;
  return (
    <div className="mb-2 w-full">
      <select {...props}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${className} ${variantClasses[variant]} ${error ? 'border-red-500' : ''} `}
      >
        {options.map((opt, idx) => (
          <option
            key={idx}
            value={opt === "Day" ? "" : opt}
            style={opt === "Day" ? { color: "red" } : {}}
            disabled={opt === "Day"}
          >
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}