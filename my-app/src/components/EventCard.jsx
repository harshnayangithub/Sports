import React from 'react';

function EventCard({ event, onSelect, isSelected, isDisabled }) {
  return (
    <div className={`p-4 rounded-lg shadow-lg ${isDisabled ? 'bg-gray-300' : 'bg-blue-100'} ${isSelected ? 'border-2 border-[#6B8A7A]' : ''}`}>
      <div className="flex items-center justify-between">
        <span className={`text-2xl font-bold ${event.event_category === 'Swimming' ? 'text-blue-700' : 'text-gray-700'}`}>
          {event.event_category.charAt(0)}
        </span>
        <div>
          <h3 className="text-xl font-semibold">{event.event_name}</h3>
          <p className="text-sm">{event.event_category}</p>
          <p className="text-sm">{new Date(event.start_time).toLocaleTimeString()} - {new Date(event.end_time).toLocaleTimeString()}</p>
        </div>
      </div>
      <button 
        onClick={() => onSelect(event)} 
        disabled={isSelected || isDisabled} 
        className={`mt-4 w-full py-2 rounded ${isSelected ? 'bg-[#DAD3BE] text-white' : 'bg-[#B7B597] text-black'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#B7B597]'}`}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  );
}

export default EventCard;
