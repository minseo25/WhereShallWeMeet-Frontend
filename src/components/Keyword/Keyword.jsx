// src/components/Keyword/Keyword.jsx
import React from 'react';

const Keyword = ({ keyword, isSelected, onSelectKeyword }) => (
  <div 
    className={`flex w-24 h-[35px] items-center justify-center gap-2.5 px-4 py-px relative ${isSelected ? `bg-blue-300` : `bg-[#fffafa]`} rounded-[10px] cursor-pointer pointerhover:hover:bg-blue-200`}
    onClick={onSelectKeyword}
  >
    <div className="relative w-fit ml-[-8.00px] mr-[-8.00px] text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
      # {keyword}
    </div>
  </div>
);

export default Keyword;