import React from 'react';

const SearchOutput = ({ result, onClose }) => (
  <div className="p-4 border-b border-gray-200 cursor-pointer" onClick={() => onClose(result)} >
    <div className="text-lg font-bold">{result.place_name}</div>
    <div className="text-sm text-gray-500">{result.road_address_name}</div>
  </div>
);

export default SearchOutput;
