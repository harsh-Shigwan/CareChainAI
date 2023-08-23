import React from 'react';
//import data from '../../data/PatientData/dummy';

const HorizontalImageCardList = ({ data }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md">
          <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HorizontalImageCardList;
