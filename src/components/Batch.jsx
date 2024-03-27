import React from "react";

const Batch = ({ className, text }) => {
  return (
    <div
      className={`${
        text ? "block" : "hidden"
      } font-dmsans text-sm font-bold text-white bg-primary px-8 py-2.5 ${className}`}
    >
      {text}
    </div>
  );
};

export default Batch;
