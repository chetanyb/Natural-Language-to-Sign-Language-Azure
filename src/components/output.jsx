import React from "react";

const Output = () => {
  return (
    <div className="flex items-center justify-center m-10">
      <svg
        className="m-auto"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, right: 0 }}
      >
        <rect
          className="text-gray-200 fill-transparent stroke-current stroke-2"
          width="50%"
          height="50%"
          rx="25"
          ry="25"
        />
        <path
          className="text-gray-200 stroke-current stroke-2"
          d="M 25% 25% L 75% 75% M 25% 75% L 75% 25%"
        />
      </svg>
    </div>
  );
};

export { Output };
