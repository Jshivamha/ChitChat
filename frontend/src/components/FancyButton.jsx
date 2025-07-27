import React from "react";

const FancyButton = ({
  children = "Explore All",
  color = "#7808d0",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // expose the color as a CSS variable so Tailwind can still control hover states
      style={{ "--btn-clr": color }}
      className={`
        group inline-flex items-center gap-3 font-semibold text-white rounded-full
        px-6 py-3 whitespace-nowrap overflow-hidden
        transition-colors duration-300
        [background-color:var(--btn-clr)]
        hover:bg-black
      `}
    >
      <span
        className={`
          relative grid place-items-center w-[25px] h-[25px]
          rounded-full bg-white overflow-hidden flex-shrink-0
          text-[var(--btn-clr)]
          transition-colors duration-300
          group-hover:text-black
        `}
      >
        {/* main icon */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          className={`
            button__icon-svg absolute
            transition-transform duration-300
            group-hover:translate-x-[150%] group-hover:-translate-y-[150%]
          `}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* copy icon that slides in */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          className={`
            absolute
            translate-x-[-150%] translate-y-[150%]
            transition-transform duration-300 delay-100
            group-hover:translate-x-0 group-hover:translate-y-0
          `}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>

      {children}
    </button>
  );
};

export default FancyButton;
