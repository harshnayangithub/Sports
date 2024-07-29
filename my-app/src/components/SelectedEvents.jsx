import React from 'react';

function SelectedEvents({ events, onDeselect }) {
  return (
    <div className="space-y-4">
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events selected</p>
      ) : (
        events.map(event => (
          <div key={event.id} className="p-4 bg-blue-100 rounded-lg shadow-lg">
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
              onClick={() => onDeselect(event)} 
              className="mt-4 w-full py-2 rounded bg-[#DAD3BE] text-white hover:bg-[#B7B597]"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SelectedEvents;
