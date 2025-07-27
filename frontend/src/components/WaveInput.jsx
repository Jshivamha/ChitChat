import React, { useState } from "react";

const WaveInput = ({
  type = "text",
  value,
  onChange,
  required = true,
  ...rest
}) => {
  const isControlled = value !== undefined && onChange;
  const [internalValue, setInternalValue] = useState("");

  const val = isControlled ? value : internalValue;
  const setVal = (v) => (isControlled ? onChange(v) : setInternalValue(v));

  const [focused, setFocused] = useState(false);
  const active = focused || (val && val.length > 0);

  const label = "Message";

  return (
    <div className="relative inline-block w-[70%]">
      {/* Input */}
      <input
        type={type}
        required={required}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="
          block w-full bg-transparent border-b border-gray-600
          px-1 py-2 text-base text-white
          focus:outline-none focus:border-indigo-500
        "
        {...rest}
      />

      {/* Label */}
      <label
        className={`
          pointer-events-none absolute left-1 top-2 flex
          ${active ? "text-indigo-600" : "text-gray-400"}
        `}
      >
        {label.split("").map((ch, i) => (
          <span
            key={i}
            style={{ transitionDelay: `${i * 50}ms` }}
            className={`
              transition-all duration-200
              ${active ? "-translate-y-5 text-sm" : ""}
            `}
          >
            {ch}
          </span>
        ))}
      </label>

      {/* Expanding center bar */}
      <span className="absolute left-0 right-0 bottom-0 h-[2px]">
        <span
          className={`
            absolute left-1/2 bottom-0 h-[2px] bg-indigo-500
            transition-all duration-200
            ${focused ? "w-1/2" : "w-0"}
          `}
        />
        <span
          className={`
            absolute right-1/2 bottom-0 h-[2px] bg-indigo-500
            transition-all duration-200
            ${focused ? "w-1/2" : "w-0"}
          `}
        />
      </span>
    </div>
  );
};

export default WaveInput;
