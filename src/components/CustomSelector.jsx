import React from "react";

function CustomSelector({ option, defaultvalue, className }) {
  return (
    <form className={`max-w-sm ${className}`}>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-dmsans rounded-lg outline-none block w-full p-2.5 ">
        <option selected>{defaultvalue}</option>

        {option?.map((item, i) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </form>
  );
}

export default CustomSelector;
