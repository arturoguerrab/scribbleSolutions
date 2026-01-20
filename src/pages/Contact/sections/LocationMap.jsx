import React from 'react';

const LocationMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative">
      {/* Placeholder for Map */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        Map Integration
      </div>
      <div className="absolute top-4 left-4 right-4 bg-brand-blue text-white p-4 rounded-xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <div>
            <p className="font-bold text-lg">¡Contáctanos!</p>
            <p className="text-sm opacity-90">Person to person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
