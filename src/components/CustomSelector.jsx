import React from 'react'

function CustomSelector() {
  return (
    
<form className={`max-w-sm`}>
  
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-base font-dmsans rounded-lg outline-none block w-full p-2.5 ">
    <option selected>S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
  </select>
</form>

  )
}

export default CustomSelector