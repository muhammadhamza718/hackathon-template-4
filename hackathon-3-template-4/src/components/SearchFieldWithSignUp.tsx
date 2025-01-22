import colors from './utils/colors';
import React from 'react';

const SearchFieldWithSignUp = () => {
  return (
    <div className="w-[377px] h-[44px] flex rounded " style={
       {  backgroundColor: colors.white,}
      }>
      {/* Input field */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3  text-sm  text-black border-none outline-none rounded" />
      {/* Sign Up button container */}
      <div className="w-[135px]  bg-[#FB2E86] flex items-center justify-center cursor-pointer rounded">
        <span className="text-white font-semibold">Sign Up</span>
      </div>
    </div>
  );
};

export default SearchFieldWithSignUp;
